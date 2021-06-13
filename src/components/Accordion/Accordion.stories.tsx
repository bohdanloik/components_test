import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';


export default {
  title: 'Accordion',
  component: Accordion
  
};

export const CollapsedMode = () => <Accordion open={true} setAccordionOn={action('turn on/off')} title={'Accordion'} item={['t','w']}/>

export const UncollapsedMode = () => <Accordion open={false} setAccordionOn={action('turn on/off')} title={'Accordion'} item={['e','b']}/>

export const ChangingMode = () => {
    const [OnOff, setOnOff]= useState<boolean>(true);
   return  <Accordion open={OnOff} setAccordionOn={setOnOff}title={'Accordion'} item={['t','b']}/>
}

