type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    title: string
    open: boolean
    setAccordionOn: (on: boolean) => void
    item: ItemType[]
    onclick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} on={() =>{props.setAccordionOn(!props.open)}} />
            {props.open ? <AccordionBody  item={props.item} onclick={props.onclick}/> : ''}
        </div>
    )
    
}

type AccordionTitlePropsType = {
    title: string
    on: () => void

}
function AccordionTitle(props: AccordionTitlePropsType) {
    return(
        <div>
            <h1 onClick={()=>{
                props.on()
            }}>{props.title}</h1>
        </div>
    )
}

type AccordionBodyTypeBody ={
    item: ItemType[]
    onclick: (value: any) => void
}

function AccordionBody(props: AccordionBodyTypeBody) {
    return (<div>
        <ul>
        { props.item.map((i, index) => <li onClick={() => {props.onclick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    </div>)
}