export function pageScroller(ref:any):void{
    ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}