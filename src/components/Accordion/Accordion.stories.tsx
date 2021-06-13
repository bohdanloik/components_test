import React, { useReducer, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';


export default {
  title: 'Accordion',
  component: Accordion
  
};
export type ActionType = {
    type: string
}
const onClickCallback = action('Item was clicked');
const reducer = (state: boolean, action: ActionType) => {
    if(action.type === 'COLLAPSED') {
      return !state;
    }
    return state;
  }

 export const CollapsedMode = () => <Accordion open={true} on={action('turn on/off')} title={'Accordion'} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={onClickCallback}/>

export const UncollapsedMode = () => <Accordion open={false} on={action('turn on/off')} title={'Accordion'} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={onClickCallback}/>

export const ChangingMode = () => {
    // const [OnOff, setOnOff]= useState(true);
    let [accordionOn, dispatch] = useReducer(reducer, false);
   return  <Accordion open={accordionOn} on={()=> {dispatch({type: 'COLLAPSED'})}} title={'Accordion'} item={[{title: 'E', value: 1},{ title: 'B', value: 2}]} onclick={(value =>{alert(`Item ID${value} was clicked`)})}/>
}

