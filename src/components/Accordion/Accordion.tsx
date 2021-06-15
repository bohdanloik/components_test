import React from "react";

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    title: string
    open: boolean
    item: ItemType[]
    onclick: (value: any) => void
    on: () => void
}

export type ActionType = {
    type: string
}
export function AccordionSecret(props: AccordionPropsType) {
    console.log('ACCORDION');
    
    return (
        <div>
            <AccordionTitle title={props.title} on={props.on} />
            {props.open ? <AccordionBody  item={props.item} onclick={props.onclick}/> : ''}
        </div>
    )
    
}

export const Accordion = React.memo(AccordionSecret);

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