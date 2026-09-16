import { motion } from "motion/react"

const ProjectInfoTitles = () => {

      const containerVariant = {
        hidden: {opacity:0},
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
        },
    } 

  const childVariantRight = {
    hidden: {opacity: 0, x: 500},
    visible: {opacity: 1, x: 0},
  }

    const childVariantLeft = {
        hidden: {opacity: 0, x: -500},
        visible: {opacity: 1, x: 0},
    }

  return (
        <motion.div
            variants={containerVariant}
            initial = 'hidden'
            whileInView='visible'
            transition={{duration: 1, ease:'easeInOut'}}
            className="text-center">
            <motion.h1 className="font-sfprosemi font-semibold text-[48px]" variants={childVariantRight} transition={{duration: 0.6, ease:'easeInOut'}}>Спроектировано для простоты.</motion.h1>
            <motion.h1 className="font-sfprosemi font-semibold text-xl text-textgray text-[48px]" variants={childVariantLeft} transition={{duration: 0.6, ease:'easeInOut'}}>Создано для эффективности.</motion.h1>
        </motion.div>
  )
}

export default ProjectInfoTitles
