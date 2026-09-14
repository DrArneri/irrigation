import WaterDrop from "../shared/ui/WaterDrop";
import Header from "../widgets/Header";
import { motion } from "motion/react";
import { ButtonSection } from "../widgets/ButtonSection";
import MainPageBottom from "../widgets/MainPageBottom";
/**
 * Порядок рендера задаёт порядок слоёв (z-index ниже → выводится первым):
 *   1. FallingDrops    (z-0) — движущиеся капли
 *   2. GlassBackground (z-10) — размытое «стекло» с градиентными полосами
 *   3. HeroContent     (z-20) — читаемый контент
 */
export default function App() {
  return (
    <motion.div className="w-screen h-screen relative">
      <div className="h-screen w-screen relative z-[100] backdrop-blur-[100px] bg-warning-stripes"></div>
      <div className="w-screen inset-0 h-screen absolute z-[200]">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <Header />
          <ButtonSection />
          <MainPageBottom />
        </div>
      </div>
      <WaterDrop top={0} left={20} />
      <WaterDrop top={-100} left={1400} />
    </motion.div>
  );
}
