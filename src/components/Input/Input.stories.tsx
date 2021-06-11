import React, { useState } from 'react';
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

export const ControlledInputWithFixedValue = () => <input value={'Input'} />



