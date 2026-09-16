import type { Color } from "./colorDot.config.ts"
import { dotColors } from "./colorDot.config.ts"
import { cn } from "../../../shared/lib/cn.ts"
import type { HTMLAttributes } from "react"
type Props = {
    color: Color
} & HTMLAttributes<HTMLDivElement>

const ColorDot = ({color, className}:Props) => {
  return (
    <div className={cn(`size-4 rounded-[50%] ${dotColors[color]}`, className)}>
    
    </div>
  )
}

export default ColorDot 
