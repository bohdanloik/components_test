import React from 'react';
import { Checked } from '../Rating/Rating';
import './Star.css';
type StarPropsType = {
    checked: boolean
    setRatingCount: () => void
}
export function StarSecret(props: StarPropsType) {
    console.log('STAR');
    
    return <div onClick={()=> {
        props.setRatingCount();
    }} className={props.checked ? 'star checked' : 'star'}> STAR</div>
}

export const Star = React.memo(StarSecret);