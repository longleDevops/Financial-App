"use client"

import * as z from "zod";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Company } from "@prisma/client"
import axios from "axios";
//import { safeParse } from 'zod'

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast from "react-hot-toast";

interface TransactionProps {
  btnName: string,
  color: string,
  company: Company
}


export function Transaction({ btnName, color, company }: TransactionProps) {
  const symbol = company.symbol;

  const formSchema = z.object({
    prompt: z.coerce.number().int().positive().lte(100, {
      message: "Must be less than 100"
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: 1
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const transaction = {
        type: btnName,
        value: values.prompt
      }
      const response = await axios.patch("/api/account", {
        transaction
      });
      if (response) {
        toast.success("Successful")
        setIsOpen(false)
      }
      // clear user input
      form.reset()
    } catch (error) {
      console.log("Error submitting the form")
    } finally {
      router.refresh()
    }
  }

  const [isOpen, setIsOpen] = useState(false)
  const isLoading = form.formState.isSubmitting;
  const router = useRouter()
  return (
    <Sheet open={isOpen} >
      <SheetTrigger asChild>
        <button
          className={cn("px-4 py-2 mt-2 text-xs font-medium text-white rounded-lg ", color)}
          onClick={() => setIsOpen(true)}
        >
          {btnName}
        </button>
      </SheetTrigger>
      <SheetOverlay
        onClick={() => setIsOpen(false)}
      />
      <SheetContent >
        <SheetHeader>
          <SheetTitle>Buy Stock</SheetTitle>
          <SheetDescription>
            Make stock transactions here
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Symbol
            </Label>
            <Label className="col-span-3 pl-4" >
              {symbol}
            </Label>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Company
            </Label>
            <Label className="col-span-3 pl-4" >
              {company.yahooMarketV2Data.longName}
            </Label>
          </div>

          <Form {...form} >
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=""
            >
              <div className="flex gap-4 px-5">
                <p className="text-sm">Amount</p>
                <FormField
                  name="prompt"
                  render={({ field }) => (
                    <FormItem >
                      <FormControl className="px-2 m-0">
                        <Input
                          type="number"
                          disabled={isLoading}
                          placeholder="500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end gap-2 mt-6">

                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="px-4 py-2 text-black rounded-lg bg-secondary">
                  Cancel
                </button>

                <button
                  type="submit" className="px-4 py-2 text-white bg-black rounded-lg">Confirm</button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
