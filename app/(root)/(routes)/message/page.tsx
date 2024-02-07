import { ChatContent } from "./components/ChatContent"
import prismadb from "@/lib/prismadb"

const MessengerPage = async () => {
  const chatBot = await prismadb.chatBot.findFirst({
    include: {
      messages: true
    }
  })
  return (
    <div className="flex w-full h-screen">
      <div className="w-[25%] bg-muted-foreground border-black border">

      </div>
      <div className="flex-1">
        <ChatContent chatBot={chatBot} />
      </div>
    </div>
  )
}
export default MessengerPage