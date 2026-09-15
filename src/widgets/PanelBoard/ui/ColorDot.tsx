import type { Color } from "./colorDot.config.ts"
import { dotColors } from "./colorDot.config.ts"

type Props = {
    color: Color
}  

const ColorDot = ({color}:Props) => {
  return (
    <div className={`size-4 rounded-[50%] ${dotColors[color]}`}>
    
    </div>
  )
}

export default ColorDot 
