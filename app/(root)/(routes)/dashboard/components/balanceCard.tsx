import { AiOutlineRise } from "react-icons/ai";
import { MdAccountBalance, MdCardTravel } from "react-icons/md";
import { LuWallet } from "react-icons/lu";

interface BalanceCardProps {
  title: string,
  value: string,
  percentChange: string
  index: number
}

const icons = [
  {
    icon: MdAccountBalance
  },
  {
    icon: LuWallet
  },
  {
    icon: MdCardTravel
  }
]

export const BalanceCard = (
  { title, value, percentChange, index }: BalanceCardProps
) => {

  const selectedIcon = icons[index]

  return (
    <div className={`p-4 border border-muted-foreground/30 rounded-lg w-[250px] flex flex-col gap-3 ${index === 0 && "bg-[#6149cd] shadow-black/25"} text-xs shadow-lg`}>
      <div className="flex items-end">
        <selectedIcon.icon
          size={18}
          className={`${index === 0 && "text-white"}`}
        />
        <p className={`${index === 0 ? "text-white/90" : "text-muted-foreground"} ml-2 font-semibold`}>{title}
        </p>
      </div>
      <p className={`${index === 0 && "text-white"} font-semibold text-xl mt-1`}>
        ${value}
      </p>

      <div className={`${index === 0 && "text-white"} flex items-center justify-between mt-2`}>
        <div className="flex items-center gap-2">
          <AiOutlineRise
            size={25}
          />
          <p className="font-medium">+30.23%</p>
        </div>
      </div>
    </div>
  )
}

