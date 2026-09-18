import type { Color } from "./colorDot.config.ts"
import { dotColors } from "./colorDot.config.ts"
import { cn } from "../../../shared/lib/cn.ts"
import type { HTMLAttributes } from "react"
import {motion, type MotionProps} from 'motion/react'
type Props = {
    color: Color
} & HTMLAttributes<HTMLDivElement> & MotionProps

const ColorDot = ({color, className, ...rest}:Props) => {
  return (
    <motion.div
    {...rest}
    className={cn(`size-4 rounded-[50%] ${dotColors[color]}`, className)}>
    </motion.div>
  )
}

export default ColorDot 
