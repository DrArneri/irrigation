import { motion } from "motion/react";
import {HomeScreenBottom, ProjectInfoTitles, HeroSection, Header} from '../widgets'
import {HomeBlur, AutoIrrigationParagraph, parInfo1, WaterDrop} from "../shared/ui/";
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
      <motion.div className="w-screen h-full flex flex-col pr-[3rem] pl-[3rem] pt-[3rem] justify-between items-center">
        <ProjectInfoTitles/>
        <motion.div className="flex w-full justify-between">
          <AutoIrrigationParagraph text={parInfo1.text} title={parInfo1.title} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MainPage
