import { motion } from "motion/react"
import { ColorDot } from "../../../widgets/PanelBoard"

type Props = {
    svgUrl: string
    headerCardTitle: string
    cardText: string
    featuresArr: string[]
    cardIndex: number
    totalCards: number
    isStacked: boolean
}

export default function TechnologyCard({svgUrl, headerCardTitle, cardText, featuresArr, cardIndex, totalCards, isStacked}:Props){
  const cardWidth = 320
  const cardGap = 40

  const getStackedPosition = () => {
    const rotations = [-2, 1, -1]
    return {
      y: cardIndex * 8,
      rotate: rotations[cardIndex] || 0,
      scale: 1,
      x: 0
    }
  }

  const getExpandedPosition = () => {
    const centerIndex = Math.floor(totalCards / 2)
    const offsetFromCenter = cardIndex - centerIndex
    return {
      x: offsetFromCenter * (cardWidth + cardGap) * 1.4,
      y: 0,
      rotate: 0,
      scale: 1
    }
  }

  const variants = {
    stacked: getStackedPosition(),
    expanded: getExpandedPosition()
  }

  return (
    <motion.div
      className="bg-white pl-8 pr-8 pt-8 pb-8 rounded-2xl shadow-technology-card gap-6 flex flex-col absolute h-[600px]"
      style={{zIndex: totalCards - cardIndex, width: cardWidth}}
      initial="stacked"
      animate={isStacked ? "stacked" : "expanded"}
      variants={variants}
      transition={{
        duration: 0.4,
        delay: cardIndex * 0.15,
        ease:'easeInOut',
        stiffness: 100,
        damping: 20
      }}
    >
      <img src={svgUrl} alt="CardImage.svg" className="size-11"/>
      <h1 className="font-sfprosemi text-semibold text-2xl">{headerCardTitle}</h1>
      <p className="font-sfpro text-xl/[28px]">{cardText}</p>
      <div className="flex flex-col">
        {featuresArr.map((f, index) => {
            return <div key={index} className="flex gap-5 items-center">
                <ColorDot color="blue"/>
                <p className="font-sfpro text-base text-technology-card-gray">
                    {f}
                </p>
            </div>
        })}
      </div>
    </motion.div>
  )
}
