import { motion, type Variants } from "motion/react"
import ColorDot from "./ui/ColorDot"
import PanelCard from "./ui/PanelCard"
import { PanelBar } from "../../shared/ui"
import makeBarVariants, { barContainerVariants, panelBoardFinalHeight } from "../../shared/ui/PanelBar/panelBarConfing"
import type { Color } from "./ui/colorDot.config"

const PanelBoard = () => {

  const containerVariant: Variants = {
    hidden:{},
    visible: {
      transition: {staggerChildren: 0.2}
    }
  }

  const childVariants: Variants = {
    hidden:{opacity: 0},
    visible: {opacity:1}
  }

  const colors: Color[] = ['red', 'yellow', 'green']

  return (
    <motion.div className="w-full max-w-[520px] lg:max-w-[520px] flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden shadow-panel h-48 sm:h-56 md:h-60">
            <div className="w-full h-10 sm:h-12 bg-panel-gray flex items-center">
              <motion.div className="flex gap-1.5 sm:gap-2 pl-4 sm:pl-6"
              variants={containerVariant}
              initial='hidden'
              whileInView='visible'>
                {colors.map((c, index) => {
                  return <ColorDot key={index} color={c} variants={childVariants}/>
                })}
              </motion.div>
              <div className="flex flex-1 justify-center pr-8 sm:pr-12">
                <p className="font-sfpro text-panel-text-gray text-xs sm:text-sm md:text-base">панель управления</p>
              </div>
            </div>
            <div className="w-full h-full flex gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 items-center">
              <PanelCard>
                <div className="h-1/3">
                  <p className='font-sfpro text-panel-text-gray text-xs sm:text-sm md:text-base text-center pt-1 sm:pt-2'>Статус</p>
                </div>
                <div className="h-2/3 flex justify-center items-center pb-4 sm:pb-8">
                  <p className="font-sfprosemi text-panel-green text-semibold text-lg sm:text-xl md:text-[23px]">Активен</p>
                </div>
              </PanelCard>
              <PanelCard>
                <div className="h-1/3">
                  <p className='font-sfpro text-panel-text-gray text-xs sm:text-sm md:text-base text-center pt-1 sm:pt-2'>Влажность</p>
                </div>
                <div className="h-2/3 flex justify-center items-center pb-4 sm:pb-8">
                  <p className="font-sfprosemi text-panel-text-blue text-semibold text-lg sm:text-xl md:text-[23px]">69%</p>
                </div>
              </PanelCard>
              <PanelCard>
                <div className="h-1/3">
                  <p className='font-sfpro text-panel-text-gray text-xs sm:text-sm md:text-base text-center pt-1 sm:pt-2'>История</p>
                </div>
                <motion.div
                variants={barContainerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.3}}
                className="h-2/3 flex gap-0.5 sm:gap-1 items-end justify-center pb-2 sm:pb-4">
                  {panelBoardFinalHeight.map((h, index) => {
                    return <PanelBar key={index} className="w-2 sm:w-3 bg-panel-bar-blue" variants={makeBarVariants(h)}/>
                  })}
                </motion.div>
              </PanelCard>
            </div>
          </motion.div>
  )
}

export default PanelBoard
