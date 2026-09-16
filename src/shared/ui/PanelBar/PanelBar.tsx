import {motion, type MotionProps} from 'motion/react'
import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
type Props = HTMLAttributes<HTMLDivElement>
& MotionProps

export default function PanelBar({ className, ...props }:Props){

    return(
        <motion.div
        {...props}
        className={cn('h-2 w-6 rounded-xl bg-panel-text-blue', className)}>
        
        </motion.div>
    )
}