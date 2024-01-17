"use client"

import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"


export const FetchBtn = () => {
  const params = useSearchParams();

  const onClick = () => {

  }
  return (
    <Button
      onClick={onClick}
      className="mt-20"
    >
      Fetch data
    </Button>
  )
}