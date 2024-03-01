import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { Portfolio_Company, Watchlist_Company, Company } from "@prisma/client";

export async function GET() {
  const { userId } = auth()
  if (!userId)
    return new NextResponse("Unauthorized", { status: 401 });

  const result = await prismadb.account.findFirst({
    where: {
      id: userId
    },
    include: {
      cards: true
    }
  })

  console.log("card GET route runs")
  console.log(result.cards)
  return NextResponse.json(result.cards, { status: 200 });
}

export async function POST(request: Request) {
  const { userId } = auth()
  if (!userId)
    return new NextResponse("Unauthorized", { status: 401 });
  const { name, cardNumber, value, expiryDate } = await request.json()
  await prismadb.card.create({
    data: {
      holderName: name,
      value: value,
      expiration: expiryDate,
      cardDigits: cardNumber,
      type: "VISA",
      accountId: userId
    },
  })


  console.log("card POST route runs")
  return NextResponse.json("", { status: 200 });
}