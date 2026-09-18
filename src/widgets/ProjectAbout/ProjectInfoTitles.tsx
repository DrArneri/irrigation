import { motion } from "motion/react"

type Props = {
  upperTitle: string,
  bottomTitle: string
}
const ProjectInfoTitles = ({upperTitle, bottomTitle}: Props) => {
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
            className="text-center px-4">
            <motion.h1 className="font-sfprosemi font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px]" variants={childVariantRight} transition={{duration: 0.6, ease:'easeInOut'}}>{upperTitle}</motion.h1>
            <motion.h1 className="font-sfprosemi font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] text-textgray" variants={childVariantLeft} transition={{duration: 0.6, ease:'easeInOut'}}>{bottomTitle}</motion.h1>
        </motion.div>
  )
}

export default ProjectInfoTitles
