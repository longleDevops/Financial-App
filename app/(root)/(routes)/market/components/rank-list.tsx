"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const stockList = [
  {
    rank: "1",
    name: "Nvidia",
    symbol: "NVDA",
    category: "Chip",
    price: "200.00",
    url: "/products/nvda-img.png",
    isActive: false
  },
  {
    rank: "2",
    name: "Tesla",
    symbol: "TSLA",
    category: "Automotive",
    price: "200.00",
    url: "/products/tsla-img.png",
    isActive: false
  },
  {
    rank: "3",
    name: "Apple",
    symbol: "AAPL",
    category: "Electronics",
    price: "150.00",
    url: "/products/aapl-img.png",
    isActive: false
  }, {
    rank: "4",
    name: "Advanced Micro Devices",
    symbol: "AMD",
    category: "Credit Card",
    price: "200.00",
    url: "/products/aapl-img.png",
    isActive: false
  }, {
    rank: "5",
    name: "VISA",
    symbol: "VISA",
    category: "Credit Card",
    price: "300.00",
    url: "/products/aapl-img.png",
    isActive: false
  },
]

interface StockItem {
  rank: string;
  name: string;
  symbol: string;
  category: string;
  price: string;
  url: string;
  isActive: boolean;
}

interface RankListProps {
  imgUrl: string,
  setImgUrl: (imgUrl: string) => void
}

export const RankList = ({ imgUrl, setImgUrl }: RankListProps) => {

  const handleClick = (item: StockItem) => {
    setImgUrl(item.url);

    stockList.map((stock) => {
      stock.symbol === item.symbol ?
        item.isActive = true :
        stock.isActive = false;
    })
  }

  return (
    <Table>
      <TableCaption>A list of top ranked companies.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="border border-red-500 w-[50px]">Rank</TableHead>
          <TableHead className="border border-red-400">Symbol</TableHead>
          <TableHead className="border border-red-400 w-[200px]">Company</TableHead>
          <TableHead className="">Category</TableHead>
          <TableHead className="">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stockList.map((item) => (
          <TableRow
            key={item.symbol}
            onClick={() => handleClick(item)}
            className={`hover:cursor-pointer hover:bg-slate-200 ${item.url === imgUrl && 'bg-slate-200'}`}
          >
            <TableCell className="font-medium">{item.rank}</TableCell>
            <TableCell>{item.symbol}</TableCell>
            <TableCell className="flex flex-wrap w-[200px]">{item.name}</TableCell>
            <TableCell className="">{item.category}</TableCell>
            <TableCell className="">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
