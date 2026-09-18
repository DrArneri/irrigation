import { motion } from "motion/react";
import {HomeScreenBottom, ProjectInfoTitles, HeroSection, Header, PanelBoard, firstTitles, secondTitles, IrrigationSchedulePanel} from '../widgets'
import {HomeBlur, AutoIrrigationParagraph, parInfo1, parInfo2, WaterDrop, technologyArray, TechnologyCardStack} from "../shared/ui";
const MainPage = () => {
  return (
    <motion.div className="w-full h-screen relative overflow-x-hidden flex-1">
      <HomeBlur/>
      <div className="w-full inset-0 h-screen absolute z-[200]">
        <div className="w-full h-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8">
          <Header />
          <HeroSection />
          <HomeScreenBottom />
        </div>
      </div>
      <WaterDrop top={0} left={50}/>
      <WaterDrop top={-100} left={1200}/>
      <motion.div className="bg-bg-color w-full h-full flex flex-col gap-8 sm:gap-12 md:gap-20 lg:gap-30 px-4 sm:px-6 md:px-12 lg:px-20 pt-8 sm:pt-12 md:pt-16 lg:pt-24 justify-between pb-8 sm:pb-12 md:pb-16">
        <ProjectInfoTitles upperTitle={firstTitles.upperTitles} bottomTitle={secondTitles.bottomTitles}/>
        <div className="flex flex-col lg:flex-row h-full w-full gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            <motion.div
            initial={{x:-40, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 0.5, ease:"easeInOut"}}
            className="flex flex-col w-full lg:w-1/2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
                <AutoIrrigationParagraph text={parInfo1.text} title={parInfo1.title} />
                <IrrigationSchedulePanel />
            </motion.div>
            <motion.div className="flex flex-col w-full lg:w-1/2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 pb-8 sm:pb-12 md:pb-16"
            initial={{x:40, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 0.5, ease:"easeInOut"}}
            >
                <PanelBoard/>
                <AutoIrrigationParagraph text={parInfo2.text} title={parInfo2.title} />
            </motion.div>
        </div>
      </motion.div>
      <motion.div className="bg-bg-color w-full h-full flex flex-col gap-8 sm:gap-12 md:gap-20 lg:gap-30 pt-4 sm:pt-6 md:pt-8 lg:pt-4 px-4 sm:px-6 md:px-12 lg:px-28 pb-8 sm:pb-12 md:pb-16">
        <ProjectInfoTitles upperTitle={secondTitles.upperTitles} bottomTitle={secondTitles.bottomTitles}/>
        <TechnologyCardStack cards={technologyArray} />
      </motion.div>
    </motion.div>
  )
}

export default MainPage
