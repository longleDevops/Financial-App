import { db } from ".";


const products =
  [
    {
      symbol: "TSLA",
      name: "SUV Tesla Model Y",
      imgSrc: "/products/tsla.webp"
    },
    {
      symbol: "NVDA",
      name: "Nvidia hardcore chip",
      imgSrc: "/products/nvda.webp"
    },
    {
      symbol: "AAPL",
      name: "Macbook Air pro",
      imgSrc: "/products/aapl.webp"
    },
    {
      symbol: "ABNB",
      name: "Delux room hotel",
      imgSrc: "/products/abnb.webp"
    },
    {
      symbol: "AMZN",
      name: "Amazon Prime Day",
      imgSrc: "/products/amzn.webp"
    },
    {
      symbol: "GOOGL",
      name: "google service",
      imgSrc: "/products/googl.webp"
    },
    {
      symbol: "COCA",
      name: "Coca Cola | Coke",
      imgSrc: "/products/cola.webp"
    },
    {
      symbol: "SOFI",
      name: "Sofi",
      imgSrc: "/products/sofi.webp"
    },
  ]

interface Product {
  name: string,
  symbol: string,
  imgSrc: string
}

async function seedProducts() {
  const promises: Promise<Product>[] = products.map((product) => (
    db.product.create({
      data: {
        ...product
      }
    }))
  )

  try {
    await Promise.all(promises);
    console.log("Successfully seeding products to database")
  } catch (error) {
    console.log("Error seeding products", error)
  } finally {
    db.$disconnect()
  }

}

seedProducts()

// npx tsx scripts/seedProduct.ts