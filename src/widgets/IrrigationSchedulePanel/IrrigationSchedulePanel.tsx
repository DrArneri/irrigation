import { motion } from "motion/react";
import { ColorDot } from "../PanelBoard";
import PanelBar from "../../shared/ui/PanelBar/PanelBar";
import makeBarVariants, { barContainerVariants, scheduleBoardFinalHeight } from "../../shared/ui/PanelBar/panelBarConfing";

export default function IrrigationSchedulePanel(){
  return (
    <motion.div className="bg-schedule-black w-130 h-60 rounded-2xl flex flex-col">
        <div className="w-full pt-[0.5em] h-12 flex justify-between items-center px-[1.5rem]">
            <p className="font-sfprop text-sm text-white">График полива</p>
            <motion.div className="flex gap-2 items-center">
                <ColorDot color="green" className="size-3"/>
                <motion.p className='font-sfprosemi text-sm text-panel-green'>Активен</motion.p>
            </motion.div>
        </div>
        <motion.div
        variants={barContainerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount:0.3}}
        className="w-full h-full flex gap-3 justify-start items-end px-[1.5rem] pb-[2rem]">
            {scheduleBoardFinalHeight.map((h, index) => {
                return <PanelBar key={index} variants={makeBarVariants(h)}/>
            })}
        </motion.div>
    </motion.div>
  )
}