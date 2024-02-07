import axios from "axios";
import { db } from "@/scripts/index";

const accounts = [
  {
    balance: 300000,
    portfolioVal: 200000,
    totalVal: 500000
  }
]

async function seedAccount() {
  try {

    // Account model 
    accounts.map(async (account) =>
      await db.account.create({
        data: {
          ...account
        }
      })
    )

  } catch (error) {
    console.log("Error seeding account", error)
  } finally {
    await db.$disconnect();
  }
}

seedAccount()