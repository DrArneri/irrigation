import { useInView } from "motion/react"
import { useRef } from "react"
import TechnologyCard from "./TechnologyCard"

type TechnologyCardData = {
    svgUrl: string
    cardHeader: string
    cardText: string
    cardFeatures: string[]
}

type Props = {
    cards: TechnologyCardData[]
}

export default function TechnologyCardStack({ cards }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <div ref={ref} className="relative flex justify-center items-center" style={{ height: '600px' }}>
            {cards.map((card, index) => (
                <TechnologyCard
                    key={index}
                    svgUrl={card.svgUrl}
                    headerCardTitle={card.cardHeader}
                    cardText={card.cardText}
                    featuresArr={card.cardFeatures}
                    cardIndex={index}
                    totalCards={cards.length}
                    isStacked={!isInView}
                />
            ))}
        </div>
    )
}
