import {motion} from 'motion/react'

type Props = {
  title: string
  text: string
}

const AutoIrrigationParagraph = ({title, text}: Props) => {
  return (
    <motion.div className="flex flex-col gap-1">
            <motion.h1 className="font-sfprosemi font-semibold text-[48px]">
              {title}
            </motion.h1>
            <motion.p className="font-sfpro text-xl text-base w-140">
              {text}
            </motion.p>
          </motion.div>
  )
}

export default AutoIrrigationParagraph
