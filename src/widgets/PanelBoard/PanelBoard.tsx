import { motion } from "motion/react"
import ColorDot from "./ui/ColorDot"
import PanelCard from "./ui/PanelCard"
import { PanelBar } from "../../shared/ui"
import makeBarVariants, { barContainerVariants, panelBoardFinalHeight } from "../../shared/ui/PanelBar/panelBarConfing"

const PanelBoard = () => {
   const panelBoardBarVariant = {
        hidden: {height:0},
        visible: {height:80}
    }
  return (
    <motion.div className="w-130 flex flex-col justify-between rounded-3xl overflow-hidden shadow-panel h-60">
            <div className="w-full h-12 bg-panel-gray flex items-center">
              <motion.div className="flex gap-2 pl-[1.5rem]">
                <ColorDot color="red"/>
                <ColorDot color="yellow"/>
                <ColorDot color="green"/>
              </motion.div>
              <div className="flex flex-1 justify-center pr-[3rem]">
                <p className="font-sfpro text-panel-text-gray text-m">панель управления</p>
              </div>
            </div> 
            <div className="w-full h-full flex gap-4 px-[1rem] items-center">
              <PanelCard>
                <div className="h-1/3">
                  <p className='font-sfpro text-panel-text-gray text-base text-center pt-[0.5em]'>Статус</p>
                </div>
                <div className="h-2/3 flex justify-center items-center pb-[2rem]">
                  <p className="font-sfprosemi text-panel-green text-semibold text-[23px]">Активен</p>
                </div>
              </PanelCard>
              <PanelCard>
                <div className="h-1/3">
                  <p className='font-sfpro text-panel-text-gray text-base text-center pt-[0.5em]'>Влажность</p>
                </div>
                <div className="h-2/3 flex justify-center items-center pb-[2rem]">
                  <p className="font-sfprosemi text-panel-text-blue text-semibold text-[23px]">69%</p>
                </div>
              </PanelCard>
              <PanelCard>
                <div className="h-1/3">
                  <p className='font-sfpro text-panel-text-gray text-base text-center pt-[0.5em]'>История</p>
                </div>
                <motion.div
                variants={barContainerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.3}}
                className="h-2/3 flex gap-1 items-end justify-center pb-[1rem]">
                  {panelBoardFinalHeight.map((h, index) => {
                    return <PanelBar key={index} className="w-3 bg-panel-bar-blue" variants={makeBarVariants(h)}/>
                  })}
                </motion.div>
              </PanelCard>
            </div>
          </motion.div>
  )
}

export default PanelBoard
