import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ModeToggle from "./mode-toggle"
import { DialogDemo } from "./dialogcomp"
import { GoogleTranslate } from "./languagetranslate"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">More Features</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Default Feature</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold">Change Theme</h2>
            <ModeToggle />
          </div>
          <div className="flex items-center gap-4">
            <h2 className="font-semibold">Change Language</h2>
            <GoogleTranslate />
          </div>
          {/* <div className="flex items-center gap-4">
            <h2 className="font-semibold">Change:</h2>
            <DialogDemo />
          </div> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
