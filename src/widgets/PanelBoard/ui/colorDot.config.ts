export type Color = 'red' | 'yellow' | 'green'

type DotColors = Record<Color, string>

export const dotColors: DotColors = {
    red: 'bg-panel-red',
    yellow: 'bg-panel-yellow',
    green: 'bg-panel-green'
}