import React from 'react';
import './Switcher.css';

export type SwitcherPropsType = {
    value: boolean
    setSwitcherOn: (value: boolean) => void
}

export function SwitcherSecret(props: SwitcherPropsType) {
    console.log('SWITCHER');
    
    return ( <div onClick ={()=> {
        props.setSwitcherOn(!props.value)
    }}>
                <div 
                className={props.value ? 'switcher bg-green': 'switcher'}
                >On</div>
                <div 
                className={props.value ? 'switcher' : 'switcher bg-red'}
                >Off</div>
                <div className={props.value ? 'round bg-green' : 'round bg-red'}></div>
            </div> )
}

export const Switcher = React.memo(SwitcherSecret);