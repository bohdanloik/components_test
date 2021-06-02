import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Switcher, SwitcherPropsType } from './Switcher';


export default {
  title: 'Switcher',
  component: Switcher
  
};

export const SwitcherOn = () => <Switcher value={true} setSwitcherOn={action('turn on/off')}/>

export const SwitcherOff = () => <Switcher value={false} setSwitcherOn={action('turn on/off')}/>

export const SwitcherChanging = () => {
    const [OnOff, setOnOff]= useState<boolean>(true);
   return  <Switcher value={OnOff} setSwitcherOn={setOnOff}/>
}

