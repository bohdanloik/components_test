import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Switcher, SwitcherPropsType } from './Switcher';


export default {
  title: 'Switcher',
  component: Switcher
  
};

export const SwitcherOn = () => <Switcher value={true} setSwitcherOn={r=>r}/>

export const SwitcherOff = () => <Switcher value={false} setSwitcherOn={r=>r}/>

export const SwitcherChanging = () => {
    const [OnOff, setOnOff]= useState<boolean>(true);
   return  <Switcher value={OnOff} setSwitcherOn={setOnOff}/>
}


