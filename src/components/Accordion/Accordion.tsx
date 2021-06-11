type AccordionPropsType = {
    title: string
    open: boolean
    setAccordionOn: (on: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} on={() =>{props.setAccordionOn(!props.open)}} />
            {props.open ? <AccordionBody /> : ''}
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

}

function AccordionBody(props: AccordionBodyTypeBody) {
    return (<div>
        <ul>
            <li>HELLO</li>
            <li>WORLD</li>
            <li>NEW</li>
            <li>HELLO</li>
        </ul>
    </div>)
}