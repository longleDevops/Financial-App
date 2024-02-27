import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/shadcn-ui/dropdown-menu"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogOverlay
} from "@/components/shadcn-ui/dialog"


import { Button } from "@/components/shadcn-ui/button"
export const CardDropdown = () => {
  return (
    <Dialog>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="flex justify-end">
            Add card
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-muted-foreground/30" />
          <DialogTrigger asChild>
            <DropdownMenuItem className="flex justify-end">
              Deposit
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem className="flex justify-end">Withdraw</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently
            delete this file from our servers?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}