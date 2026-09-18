import {motion} from 'motion/react'

type Props = {
  title: string
  text: string
}

const AutoIrrigationParagraph = ({title, text}: Props) => {
  return (
    <motion.div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <motion.h1 className="font-sfprosemi font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
              {title}
            </motion.h1>
            <motion.p className="font-sfpro text-base sm:text-lg md:text-xl w-full max-w-[560px]">
              {text}
            </motion.p>
          </motion.div>
  )
}

export default AutoIrrigationParagraph
