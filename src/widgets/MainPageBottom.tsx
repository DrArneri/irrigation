import { motion } from "motion/react";

export default function MainPageBottom() {
  const parVarian = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
  };

  return (
    <div className="flex justify-between w-full pb-[2rem] pr-[3rem] pl-[3rem]">
      <motion.p
        variants={parVarian}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="font-sfpro text-2xl w-3/11"
      >
        Настройте систему один раз — и позвольте ей выполнять свою работу.
      </motion.p>
      <motion.p
        variants={parVarian}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="font-sfpro text-2xl w-2/10"
      >
        Листайте ниже, чтобы узнать больше о нашем продукте
      </motion.p>
    </div>
  );
}
