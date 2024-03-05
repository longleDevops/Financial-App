import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";


export async function PATCH(request: Request) {
  try {
    const { userId } = auth()
    if (!userId)
      return new NextResponse("Unauthorized", { status: 401 });

    const { cardNum, value } = await request.json()

    const foundCard = await prismadb.card.findFirst({ where: { cardDigits: cardNum } })
    const foundAccount = await prisma?.account.findFirst({ where: { id: userId } })

    if (value > foundAccount.accountBalance) {
      return new NextResponse("Insufficient account balance", { status: 400 })
    }

    await prismadb.card.update({
      where: {
        cardDigits: cardNum
      },
      data: {
        value: foundCard.value + value
      }
    })

    await prismadb.account.update({
      where: {
        id: userId
      },
      data: {
        accountBalance: foundAccount.accountBalance - value,
        accountValue: foundAccount.accountValue - value
      }
    })
    console.log("card/deposit PATCH runs")
    return new NextResponse("Success", { status: 200 })
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}