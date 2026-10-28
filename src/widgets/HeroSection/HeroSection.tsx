import { useState } from "react";
import Button from "../../shared/ui/Button/Button";
import { motion } from "motion/react";
import { Modal } from "../../shared/ui/Modal";
import { LoginForm, RegisterForm } from "../../features/Auth";

type ModalType = "login" | "register" | null;

export default function HeroSection() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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

  const closeModal = () => setActiveModal(null);
  const openLogin = () => setActiveModal("login");
  const openRegister = () => setActiveModal("register");

  return (
    <>
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-sfprosemi text-[40px]/10 sm:text-[55px]/12 md:text-[70px]/16 lg:text-[90px]/20 font-bold"
        >
          Автополив
        </motion.h1>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="font-sfpro text-lg sm:text-xl md:text-2xl lg:text-[30px] flex"
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
        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button variant={"signIn"} onClick={openLogin}>
            Войти
          </Button>
          <Button variant={"reg"} onClick={openRegister}>
            Регистрация
          </Button>
        </motion.div>
      </div>

      <Modal isOpen={activeModal === "login"} onClose={closeModal}>
        <LoginForm onSwitchToRegister={openRegister} onClose={closeModal} />
      </Modal>

      <Modal isOpen={activeModal === "register"} onClose={closeModal}>
        <RegisterForm onSwitchToLogin={openLogin} onClose={closeModal} />
      </Modal>
    </>
  );
}
