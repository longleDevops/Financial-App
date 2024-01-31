const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

const accounts = [
  {
    balance: 300000,
    portfolioVal: 200000,
    totalVal: 500000
  }
]

const companies =
  [
    {
      name: "Tesla Inc.",
      symbol: "TSLA",
      price: "200.23",
      sector: "Automotive",
      rank: "1",
      imgSrc: "/logos/tsla.svg",
      sentimental: "strong buy"
    },
    {
      name: "Nvdia Inc.",
      symbol: "NVDA",
      price: "200.12",
      sector: "Chip",
      rank: "2",
      imgSrc: "/logos/nvda.svg",
      sentimental: "buy"

    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "135.32",
      sector: "Electronics",
      rank: "3",
      imgSrc: "/logos/aapl.svg",
      sentimental: "strong sell"

    },
    {
      name: "AirBnb Inc.",
      symbol: "ABNB",
      price: "200.65",
      sector: "Travel",
      rank: "4",
      imgSrc: "/logos/abnb.svg",
      sentimental: "sell"

    },
    {
      name: "Amazon Inc.",
      symbol: "AMZN",
      price: "124.80",
      sector: "Ecommerce",
      rank: "5",
      imgSrc: "/logos/amzn.svg",
      sentimental: "buy"

    },
    {
      name: "Google Inc.",
      symbol: "GOOGL",
      price: "124.55",
      sector: "Ecommerce",
      rank: "5",
      imgSrc: "/logos/googl.svg",
      sentimental: "sell"

    },
    {
      name: "Coca Cola Inc.",
      symbol: "COLA",
      price: "230.22",
      sector: "Drink",
      rank: "9",
      imgSrc: "/logos/cola.svg",
      sentimental: "strong buy"
    },
    {
      name: "Sofi Inc.",
      symbol: "SOFI",
      price: "130.12",
      sector: "Bank",
      rank: "9",
      imgSrc: "/logos/sofi.svg",
      sentimental: "strong buy"
    },
  ]

const products =
  [
    {
      name: "SUV Tesla Model Y",
      imgSrc: "/products/tsla.webp"
    },
    {
      name: "Nvidia hardcore chip",
      imgSrc: "/products/nvda.webp"
    },
    {
      name: "Macbook Air pro",
      imgSrc: "/products/aapl.webp"
    },
    {
      name: "Delux room hotel",
      imgSrc: "/products/abnb.webp"
    },
    {
      name: "Amazon Prime Day",
      imgSrc: "/products/amzn.webp"
    },
    {
      name: "google service",
      imgSrc: "/products/googl.webp"
    },
    {
      name: "Coca Cola | Coke",
      imgSrc: "/products/cola.webp"
    },
    {
      name: "Sofi",
      imgSrc: "/products/sofi.webp"
    },
  ]

async function main() {
  try {
    // Delete and reset the database
    await db.account.deleteMany();
    accounts.map(async (account) =>
      await db.account.create({
        data: {
          ...account
        }
      })
    )

    await db.company.deleteMany();

    // Important ...companies[0] to spread the child elements of first company. Spread object data. 
    Promise.all(companies.map(async (company, index) =>
      await db.company.create({
        data: {
          ...company,
          products: {
            create: {
              ...products[index]
            }
          }
        }
      })
    ))

    console.log("database initialized")
  } catch (error) {
    console.error("Error seeding default stocks", error)
  } finally {
    await db.$disconnect();
  }
}

main();