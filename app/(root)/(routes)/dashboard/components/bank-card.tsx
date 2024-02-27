import { Plus } from "lucide-react"
import { CardDropdown } from "./bank/card-dropdown"

export function BankCard() {
  const handleClick = (symbol: string) => {
  }
  return (
    <div className="w-full px-4 py-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">My Cards</p>

        <CardDropdown />
      </div>
      <div className="flex flex-col justify-between h-[164px] p-4 mt-4 text-xs border rounded-lg shadow-lg border-muted-foreground/30 bg-[#256662] text-white font-normal mx-2">
        <p className="flex justify-between">
          Long Le
          <span className="text-xl font-bold">VISA</span>
        </p>

        <div>
          <p className="mb-2 text-sm">3245 **** **** **45</p>

          <p className="flex justify-between text-sm">
            $32,000
            <span>05/28</span>
          </p>
        </div>
      </div>

    </div>

  )
}