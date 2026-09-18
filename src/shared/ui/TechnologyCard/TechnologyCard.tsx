import { ColorDot } from "../../../widgets/PanelBoard"

type Props = {
    zIndex: number
    svgUrl: string
    headerCardTitle: string
    cardText: string
    featuresArr: string[]
}

export default function TechnologyCard({zIndex, svgUrl, headerCardTitle, cardText, featuresArr}:Props){
  return (
    <div className="w-1/4 bg-white h-150 pl-[2rem] pr-[2rem] pt-[2rem] pb-[2rem] rounded-[15px] shadow-technology-card gap-6 flex flex-col" style={{zIndex}}>
      <img src={svgUrl} alt="CardImage.svg" className="size-11"/>
      <h1 className="font-sfprosemi text-semibold text-2xl">{headerCardTitle}</h1>
      <p className="font-sfpro text-xl/[28px]">{cardText}</p>
      <div className="flex flex-col">
        {featuresArr.map((f) => {
            return <div className="flex gap-5 items-center">
                <ColorDot color="blue"/>
                <p className="font-sfpro text-base text-technology-card-gray">
                    {f}
                </p>
            </div>
        })}
      </div>
    </div>
  )
}
