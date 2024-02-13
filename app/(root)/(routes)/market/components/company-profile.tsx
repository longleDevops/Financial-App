import { Button } from "@/components/ui/button"
import { ArrowLeft, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAnimate } from "framer-motion"

interface CompanyProfile {
  isBack: boolean,
  setIsBack: (isBack: boolean) => void
}

export const CompanyProfile = ({ isBack, setIsBack }: CompanyProfile) => {
  const handleClick = () => {
    setIsBack(true);
  }
  return (

    <div className="p-8 ">
      <div className="flex justify-between">
        <Button
          onClick={handleClick}
        >
          <ArrowLeft /> 
          Back
        </Button>
        <p className="text-base font-semibold underline text-muted-foreground">Tesla Inc.</p>
      </div>

      <div className="max-h-[800px] overflow-y-auto mt-8">
        <div className="grid grid-cols-2 gap-8 border border-red-700">
          <div className="p-8 bg-white rounded-lg h-[320px] w-[320px] items-center flex flex-col text-sm gap-3">
            <div className="flex justify-between w-full">
              <h1>Profile</h1>
              <h1>Icon</h1>
            </div>
            <Image
              alt="CEO image"
              src="/employees/tsla-ceo.png"
              width={100}
              height={100}
              className="object-cover bg-red-400 rounded-full min-h-[100px]"
            />
            <div className="flex flex-col items-center py-2">
              <h1>Elon Musk</h1>
              <h2>TechnoKing of Tesla, CEO & Director</h2>
              <Link
                href={"https://www.tesla.com"}
              >
                view site
              </Link>
            </div>
            <div className="flex gap-2">
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>

          <div className="bg-white rounded-lg h-[320px] w-[320px] ml-auto">
            hi
          </div>
        </div>
        <div className="bg-white h-[1000px] w-full">

        </div>
      </div>
    </div>

  )
}