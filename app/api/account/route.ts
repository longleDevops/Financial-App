import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(request: Request) {
  try {
    const { transaction } = await request.json()
    const { type, value } = transaction


    return new NextResponse("Success", { status: 200 })
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 })
  }
}