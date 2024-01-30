
export const BankCard = () => {
  const handleClick = (symbol: string) => {

  }
  return (
    <div className="w-full h-[280px] px-4 py-6">
      <div className="flex flex-col justify-between h-full p-4 text-xs border rounded-lg shadow-lg border-muted-foreground/30">
        <p className="flex justify-between">
          Credit Card
          <span>Logo</span>
        </p>
        <p>**** **** **** 3245</p>
        <div>
          <p className="flex justify-between text-xs">
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