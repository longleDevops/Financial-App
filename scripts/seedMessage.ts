import { db } from "."

async function seedMessage() {
  await db.chatBot.create({
    data: {
      messages: {
        create: {
          content: "Hey there! I'm a chatbot built with Prisma and"
        }
      }
    }
  })
}
seedMessage()

// npx tsx scripts/seedMessage.ts