"use client"

import { ChatRequestOptions } from "ai"
import { ChangeEvent, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { SendHorizonal } from "lucide-react"

interface ChatFormProps {
  input: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  isLoading: boolean

}

const ChatForm = ({
  input,
  handleInputChange,
  onSubmit,
  isLoading
}: ChatFormProps
) => {

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center py-4 border-t border-primary/10 gap-x-2"
    >
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message here..."
        className="rounded-lg bg-muted-foreground/10"
      />
      <button disabled={isLoading} className="px-6">
        <SendHorizonal className="w-6 h-6" />
      </button>
    </form>
  )
}

export default ChatForm