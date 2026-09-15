import { motion } from "motion/react";

export default function HomeScreenBottom() {
  const parVarian = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between w-full pb-4 sm:pb-6 md:pb-8 lg:pb-[2rem] px-4 sm:px-6 md:px-8 lg:pr-[3rem] lg:pl-[3rem]">
      <motion.p
        variants={parVarian}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="font-sfpro text-base sm:text-lg md:text-xl lg:text-2xl w-full md:w-3/11 text-center md:text-left"
      >
        Настройте систему один раз — и позвольте ей выполнять свою работу.
      </motion.p>

      <motion.p
        variants={parVarian}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="font-sfpro text-base sm:text-lg md:text-xl lg:text-2xl w-full md:w-2/10 flex justify-center md:justify-start"
      >
        Листайте ниже, чтобы узнать больше о нашем продукте
      </motion.p>
    </div>
  );
}
