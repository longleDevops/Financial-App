"use client"

import ChatForm from "./ChatForm"
import { useCompletion } from "ai/react"
import { ChatBot, Message } from "@prisma/client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import ChatMessages from "./ChatMessages"
import { ChatMessageProps } from "./ChatMessage"

interface ChatContentProps {
  chatBot: ChatBot & {
    messages: Message[]
  },
}

export const ChatContent = ({ chatBot }: ChatContentProps) => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatMessageProps[]>(chatBot.messages)
  const {
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput
  } = useCompletion({
    api: `/api/chat`,
    onFinish(prompt, completion) {
      const systemMessage: ChatMessageProps = {
        role: "system",
        content: completion,
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      router.refresh()
    }
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input
    }

    setMessages((current) => [...current, userMessage]);
    handleSubmit(e);
  }

  return (
    <div className="w-[80%] border border-black mx-auto h-full flex flex-col">
      <ChatMessages
        isLoading={isLoading}
        messages={messages}
      />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}