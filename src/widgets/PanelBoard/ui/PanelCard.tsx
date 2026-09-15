import type { ReactNode } from "react"

type Props = {
    children: ReactNode
}
const PanelCard = ({children}:Props) => {
  return (
    <div className="w-1/3 h-33 shadow-panel-card rounded-md">
        {children}
    </div>
  )
}
export default PanelCard
