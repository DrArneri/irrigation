import { motion } from "motion/react";
type Props = {
  handleAboutClick: () => void
  handleTechClick: () => void
}
export default function Header({handleAboutClick, handleTechClick}:Props) {


  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-4 sm:pt-6 md:pt-8 lg:pt-[2rem] w-screen flex justify-center"
      style={{ top: 0, left: 0 }}
    >
      <nav className="flex text-sm sm:text-base md:text-lg lg:text-xl gap-4 sm:gap-6 md:gap-8 lg:gap-[4rem]">
        <a className="font-sfpro cursor-pointer" >Главная</a>
        <a className="font-sfpro cursor-pointer" onClick={handleAboutClick}>О проекте</a>
        <a className="font-sfpro cursor-pointer" onClick={handleTechClick}>Технологии</a>
      </nav>
    </motion.header>
  );
}
