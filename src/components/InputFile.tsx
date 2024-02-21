import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { buttonVariants } from "./ui/button"

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="files[0]">PDF</Label>
      <Input id="files[0]" type="file" className="" />
    </div>
  )
}
