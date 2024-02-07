import { cn } from "@/lib/utils";
import { BeatLoader } from "react-spinners"

export interface ChatMessageProps {
  role: "system" | "user";
  content?: string;
  isLoading?: boolean;
  src?: string
}

const ChatMessage = ({
  role,
  content,
  isLoading,
  src
}: ChatMessageProps) => {
  return (
    <div className={cn("flex items-start gap-x-3 py-4 w-full",
      role === "user" && "justify-end")}>
      <div className="max-w-sm px-4 py-2 rounded-md bg-primary/10">
        {isLoading
          ? <BeatLoader
            size={5}
            color="black" />
          : content}
      </div>
    </div>
  )
}

export default ChatMessage