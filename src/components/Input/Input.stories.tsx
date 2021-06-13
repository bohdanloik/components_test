import React, { ChangeEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';


export default {
  title: 'input',
  
};

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
    let [value, setValue] = useState('');
    return (<div>
    <input onChange={(event) => {
        const actuallValue = event.currentTarget.value;
        setValue(actuallValue);
    }} /> - {value}
    </div>)
}   

export const ControlledInput= () => {
    const [parentValue, setParentValue] = useState('');
    return <input value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}/>
}

export const ControlledCheckbox= () => {
    const [parentValue, setParentValue] = useState(true);
    const onchange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)}
    return <input type='checkbox' checked={parentValue} onChange={onchange}/>
}

export const ControlledSelect= () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onchange = (e: ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}
    return <select name="select" id="select" value={parentValue} onChange={onchange}>
        <option>None</option>
        <option value={'1'}>Lviv</option>
        <option value={'2'}>Kyiv</option>
        <option value={'3'}>Lutsk</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'Input'} />



