import type { Variants } from "motion"

export const panelBoardFinalHeight = [40, 72, 30, 10, 66, 20, 10, 30]
export const scheduleBoardFinalHeight = [130, 90, 90, 60, 40, 30, 20, 80]

export const barContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.06, delayChildren: 0.3}
    }
}

export default function makeBarVariants(finalHeight: number): Variants{
    
    return {
    hidden: {height:0},
    visible: {
        height: [0, finalHeight * 1.1, 14, finalHeight],
        transition: {
            duration: 1.2,
            times: [0, 0.3, 0.5, 1],
            ease: 'easeInOut'
        }
    }
}}