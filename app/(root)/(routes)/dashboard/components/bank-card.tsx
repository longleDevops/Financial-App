import { Plus } from "lucide-react"

export function BankCard() {
  const handleClick = (symbol: string) => {
  }
  return (
    <div className="w-full px-4 py-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">My Cards</p>
        <div className="flex">
          <Plus size={12} />
          <p className="ml-1 text-[10px]">Add Card</p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[164px] p-4 mt-4 text-xs border rounded-lg shadow-lg border-muted-foreground/30 bg-[#256662] text-white font-normal">
        <p className="flex justify-between">
          Credit Card
          <span className="text-xl font-bold">VISA</span>
        </p>
        <p>**** **** **** 3245</p>
        <div>
          <p className="flex justify-between">
            CARD HOLDER NAME
            <span>EXP DATE</span>
          </p>
          <p className="flex justify-between">
            Long Pro
            <span>05/28</span>
          </p>
        </div>
      </div>

    </div>

  )
}