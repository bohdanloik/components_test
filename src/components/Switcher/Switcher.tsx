import React from 'react';
import './Switcher.css';

type SwitcherPropsType = {
    value: boolean
    setSwitcherOn: (value: boolean) => void
}

export function Switcher(props: SwitcherPropsType) {
    
    return ( <div onClick ={()=> {
        props.setSwitcherOn(!props.value)
    }}>
                <div 
                // onClick ={()=> {
                //     props.setSwitcherOn(true)
                // }}
                className={props.value ? 'switcher bg-green': 'switcher'}
                >On</div>
                <div 
                // onClick={() => {
                //     props.setSwitcherOn(false)
                // }} 
                className={props.value ? 'switcher' : 'switcher bg-red'}
                >Off</div>
                <div className={props.value ? 'round bg-green' : 'round bg-red'}></div>
            </div> )
}