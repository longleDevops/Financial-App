"use client"

import { ElementRef, useEffect, useRef, useState } from "react"
import ChatMessage, { ChatMessageProps } from "./ChatMessage"

interface ChatMessagesProps {
  messages: ChatMessageProps[]
  isLoading: boolean
}

const ChatMessages = ({ messages, isLoading }: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null)

  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false)

  // make fake Loading last about 2 secs
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => (
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" }) || undefined
  ), [messages.length])
  return (
    <div className="flex-1 px-4 overflow-y-auto">
      <ChatMessage
        isLoading={fakeLoading}
        role="system"
        content={"hi, this is Dynamite Trade. How can i help you today?"}
      />
      {messages.map((item) => (
        <ChatMessage
          key={item.content}
          role={item.role}
          content={item.content}
          src={item.src}
        />
      ))}
      {isLoading &&
        <ChatMessage
          role="system"
          isLoading
        />}


      <div ref={scrollRef} />
    </div>
  )
}

export default ChatMessages