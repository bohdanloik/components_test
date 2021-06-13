import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';


export default {
  title: 'Accordion',
  component: Accordion
  
};
const onClickCallback = action('Item was clicked');

export const CollapsedMode = () => <Accordion open={true} setAccordionOn={action('turn on/off')} title={'Accordion'} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={onClickCallback}/>

export const UncollapsedMode = () => <Accordion open={false} setAccordionOn={action('turn on/off')} title={'Accordion'} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={onClickCallback}/>

export const ChangingMode = () => {
    const [OnOff, setOnOff]= useState<boolean>(true);
   return  <Accordion open={OnOff} setAccordionOn={setOnOff}title={'Accordion'} item={[{title: 'E', value: 1},{ title: 'B', value: 2}]} onclick={(id =>{alert(`Item ID${id} was clicked`)})}/>
}

