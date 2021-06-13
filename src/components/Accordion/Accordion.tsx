type AccordionPropsType = {
    title: string
    open: boolean
    setAccordionOn: (on: boolean) => void
    item: string[]
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} on={() =>{props.setAccordionOn(!props.open)}} />
            {props.open ? <AccordionBody  item={props.item}/> : ''}
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
    item: string[]
}

function AccordionBody(props: AccordionBodyTypeBody) {
    return (<div>
        <ul>
        { props.item.map(i => <li>{i}</li>)}
        </ul>
    </div>)
}