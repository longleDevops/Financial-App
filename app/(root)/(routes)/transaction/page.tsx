import { Card } from "./components/card"

const cards = [
  {
    name: "AirBnb",
    symbol: "ABNB",
    changeVal: "-$44.6k",
    imgUrl: "/logo/airbnb-logo.svg"
  },
  {
    name: "Apple",
    symbol: "APPL",
    changeVal: "+$94.6k",
    imgUrl: "/logo/tsla-logo.svg"

  },
  {
    name: "Nvidia",
    symbol: "NVDA",
    changeVal: "+$24.6k",
    imgUrl: "/logo/amazon-logo.svg"

  },
  {
    name: "AirBnb",
    symbol: "ABNB",
    changeVal: "-$44.6k",
    imgUrl: "/logo/ebay-logo.svg"

  },
  {
    name: "AirBnb",
    symbol: "ABNB",
    changeVal: "-$44.6k",
    imgUrl: "/logo/ebay-logo.svg"

  },
  {
    name: "AirBnb",
    symbol: "ABNB",
    changeVal: "-$44.6k",
    imgUrl: "/logo/ebay-logo.svg"

  },
]

const TransactionPage = () => {
  return (
    <div className="flex flex-1 w-full p-4 border border-red-200">
      <div className="w-[50%] border border-purple-600">
        <p className="mb-4 text-xl font-semibold">Top Gainers</p>
        <div className="grid grid-cols-4 gap-4 px-4">
          {cards.map((card) => (
            <Card card={card} key={card.name} />
          ))}
        </div>
      </div>

      <div className="w-[50%] border border-purple-600">
        <p className="mb-4 text-xl font-semibold">Top Losers</p>
        <div className="grid grid-cols-4 gap-4 px-4">
          {cards.map((card) => (
            <Card card={card} key={card.name} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default TransactionPage