import { motion } from "motion/react";
import { ColorDot } from "../PanelBoard";
import PanelBar from "../../shared/ui/PanelBar/PanelBar";
import makeBarVariants, { barContainerVariants, scheduleBoardFinalHeight } from "../../shared/ui/PanelBar/panelBarConfing";

export default function IrrigationSchedulePanel(){
  return (
    <motion.div className="bg-schedule-black w-full max-w-[520px] h-48 sm:h-56 md:h-60 rounded-xl sm:rounded-2xl flex flex-col">
        <motion.div className="w-full pt-2 sm:pt-3 h-10 sm:h-12 flex justify-between items-center px-4 sm:px-6">
            <p className="font-sfprop text-xs sm:text-sm md:text-base text-white">График полива</p>
            <motion.div className="flex gap-1.5 sm:gap-2 items-center">
                <ColorDot
                initial={{opacity:1}}
                whileInView={{opacity:[1, 0, 1]}}
                transition={{
                duration:0.9, ease:'linear', repeat: Infinity}}
                viewport={{once: true, amount:0.5}}
                color="green"
                className="size-2 sm:size-3"
                />
                <motion.p
                className='font-sfprosemi text-xs sm:text-sm md:text-base text-panel-green'>Активен</motion.p>
            </motion.div>
        </motion.div>
        <motion.div
        variants={barContainerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount:0.3}}
        className="w-full h-full flex gap-1.5 sm:gap-2 md:gap-3 justify-start items-end px-4 sm:px-6 pb-4 sm:pb-6 md:pb-8">
            {scheduleBoardFinalHeight.map((h, index) => {
                return <PanelBar key={index} variants={makeBarVariants(h)}/>
            })}
        </motion.div>
    </motion.div>
  )
}