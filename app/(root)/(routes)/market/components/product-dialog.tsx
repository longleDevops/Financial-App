import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"



const productList = [
  "Tesla Model Y",
  "USA",
  "Electric car",
  "22,000",
  "supreme",
  "Strong and powerful",
  "fast",
  "strong yes"
]

const headers = [
  "Model",
  "Manufacture",
  "Product Type",
  "Price",
  "Trim",
  "Highlight",
  "Selling Rate",
  "In-demand"
]

const horizontalImage = [
  "/products/tsla-img.png",
  "/products/tsla-img.png",
  "/products/tsla-img.png",
]

interface ProductDialogProps {
  symbol: string,
  productUrl: string
}

export const ProductDialog = ({ symbol, productUrl }: ProductDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="flex gap-2 text-sm text-muted-foreground hover:underline"
        >
          <p>Feature</p>
          <ExternalLink
            width={20}
            height={20}
          />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[980px] overflow-hidden">

        <div className="flex">
          <div className="w-[400px] flex flex-col items-center gap-8 pt-4 pr-8">
            <Image
              src={productUrl}
              alt="tsla car"
              width={250}
              height={250}
              className="transform scale-x-[-1]"
            />
            <div className="flex gap-3">
              {horizontalImage.map((item) => (
                <div
                  key={item}
                  className="px-2 py-3 border border-slate-200"
                >
                  <Image
                    src={productUrl}
                    alt="product images"
                    width={100}
                    height={100}
                    priority={true}
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 w-full p-4 space-y-4 font-semibold border border-slate-200">
              <p>HighLights</p>
              <p>+Strong with high reliability</p>
              <p>+Free electric battery replacement</p>
              <p>+High end model</p>
            </div>
          </div>

          <div className="flex-1 px-8 border border-red-300">
            <p>2024 Tesla Model Y supreme</p>
            <div className="mt-12">
              {productList.map((item, index) => (
                <>
                  <div className="flex justify-between py-3" key={item}>
                    <p className="text-muted-foreground">{headers[index]}</p>
                    <p className="font-semibold">{item}</p>
                  </div>
                  <Separator />
                </>
              ))}
            </div>

            <div className="flex justify-end pt-8">
              <Button
              >
                Add to Compare
              </Button>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
