import Hero from "@/components/hero";
import HomeNavbar from "@/components/home-navbar";
//export const revalidate = 0; 

export default async function Home() {
  // Use Promise.all to concurrently fetch stock data for multiple symbols
  
  return (
    <div>
      <HomeNavbar  />
      <Hero />
    </div>
  )
}

