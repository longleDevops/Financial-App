interface CardProps {
  title: string,
  value: string,
  percentChange: string
  index: number
}

export const BalanceCard = ({ title, value, percentChange, index }: CardProps) => {
  return (
    <div className={`p-4 border border-muted-foreground/30 rounded-lg w-[250px] flex flex-col gap-3 ${index === 0 && "bg-[#6149cd] shadow-black/25"} text-xs shadow-lg`}>
      <div>
        <p className={`${index === 0 ? "text-white/90" : "text-muted-foreground"} font-semibold`}>{title}</p>
      </div>
      <p className={`${index === 0 && "text-white"} font-semibold text-xl`}>{value}</p>

      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <p>icon</p>
          <p>{percentChange}</p>
        </div>
        <div>
          Chart
        </div>
      </div>
    </div>
  )
}