import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-[2rem] w-screen flex justify-center"
      style={{ top: 0, left: 0 }}
    >
      <nav className="flex text-xl gap-[4rem]">
        <p className="font-sfpro cursor-pointer">Главная</p>
        <p className="font-sfpro cursor-pointer">О проекте</p>
        <p className="font-sfpro cursor-pointer">Технологии</p>
      </nav>
    </motion.header>
  );
}
