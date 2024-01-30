const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

const companies =
  [
    {
      name: "Tesla Inc.",
      symbol: "TSLA",
      price: "200",
      sector: "Automotive",
      rank: "1",
      imgSrc: "/logos/tsla.svg"

    },
    {
      name: "Nvdia Inc.",
      symbol: "NVDA",
      price: "200",
      sector: "Chip",
      rank: "2",
      imgSrc: "/logos/nvda.svg"
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "135",
      sector: "Electronics",
      rank: "3",
      imgSrc: "/logos/aapl.svg"
    },
    {
      name: "AirBnb Inc.",
      symbol: "ABNB",
      price: "200",
      sector: "Travel",
      rank: "4",
      imgSrc: "/logos/abnb.svg"
    },
    {
      name: "Amazon Inc.",
      symbol: "AMZN",
      price: "124",
      sector: "Ecommerce",
      rank: "5",
      imgSrc: "/logos/amzn.svg"
    },
    {
      name: "Google Inc.",
      symbol: "GOOGL",
      price: "124",
      sector: "Ecommerce",
      rank: "5",
      imgSrc: "/logos/googl.svg"
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
    }
  ]

async function main() {
  try {
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