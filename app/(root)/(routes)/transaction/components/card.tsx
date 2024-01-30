import Image from "next/image"

interface CardProps {
  card: {
    name: string,
    symbol: string,
    changeVal: string,
    imgUrl: string
  }
}

export const Card = ({ card }: CardProps) => {
  return (
    <div className=" h-[150px] bg-white px-4 flex flex-col items-center justify-center gap-10">
      <div className="flex gap-4">
        <Image
          src={card.imgUrl}
          alt="company logo"
          width={28}
          height={28}
        />
        <div>
          <p className="font-semibold">{card.symbol}</p>
          <p className="text-sm text-muted-foreground">{card.name}</p>
        </div>
      </div>

      <p className="text-lg font-semibold">{card.changeVal}</p>

    </div>
  )
}