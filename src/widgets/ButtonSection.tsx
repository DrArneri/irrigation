import Button from "../shared/ui/Button";
import { motion } from "motion/react";
export function ButtonSection() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textArr = ["Полив,", "который", "думает", "за", "вас."];

  return (
    <div className="flex flex-col gap-10 items-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-sfprosemi text-[90px]/20 font-bold"
      >
        Автополив
      </motion.h1>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="font-sfpro text-[30px] flex"
      >
        {textArr.map((word, index) => {
          return (
            <motion.p
              key={index}
              className="pl-[0.25em]"
              variants={itemVariants}
            >
              {word}
            </motion.p>
          );
        })}
      </motion.div>
      <motion.div className="flex gap-4">
        <Button variant={"signIn"}>Войти</Button>
        <Button variant={"reg"}>Регистрация</Button>
      </motion.div>
    </div>
  );
}
