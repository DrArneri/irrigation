import { motion } from "motion/react";
import {HomeScreenBottom, ProjectInfoTitles, HeroSection, Header, PanelBoard} from '../widgets'
import {HomeBlur, AutoIrrigationParagraph, parInfo1, parInfo2, WaterDrop} from "../shared/ui/";
import IrrigationSchedulePanel from "../widgets/IrrigationSchedulePanel/IrrigationSchedulePanel";
const MainPage = () => {
  return (
    <motion.div className="w-screen h-screen relative overflow-x-hidden">
      <HomeBlur/>
      <div className="w-screen inset-0 h-screen absolute z-[200]">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <Header />
          <HeroSection />
          <HomeScreenBottom />
        </div>
      </div>
      <WaterDrop top={0} left={20}/>
      <WaterDrop top={-100} left={1400}/>
      <motion.div className="w-screen h-full flex flex-col gap-30 pr-[3rem] pl-[5rem] pt-[3rem] justify-between">
        <ProjectInfoTitles/>
        <div className="flex h-full w-full">
            <motion.div
            initial={{x:-40, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 0.5, ease:"easeInOut"}}
            className="flex flex-col w-1/2 gap-20 items-start">
                <AutoIrrigationParagraph text={parInfo1.text} title={parInfo1.title} />
                <IrrigationSchedulePanel />
            </motion.div>
            <motion.div className="flex flex-col w-1/2 gap-20"
            initial={{x:40, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 0.5, ease:"easeInOut"}}
            >
                <PanelBoard/>
                <AutoIrrigationParagraph text={parInfo2.text} title={parInfo2.title} />
            </motion.div>
        </div>    
      </motion.div>
    </motion.div>
  )
}

export default MainPage
