import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checked, Rating } from './components/Rating/Rating';
import { Accordion, ActionType } from './components/Accordion/Accordion';
import { Switcher } from './components/Switcher/Switcher';
import { Clock } from './components/Clock/Clock';
import { SelectExample } from './components/Select/Select';


// const reducer = (state: boolean, action: ActionType) => {
//   if(action.type === 'COLLAPSED') {
//     return !state;
//   }
//   return state;
// }
const reducer = (state: boolean, action: ActionType) => {
  switch(action.type) {
    case 'COLLAPSED':
      return !state;
    default:
      return state;
  }
}

function App() {
  let [ratingCount, setRatingCount] = useState<Checked>(0);
  let [switcherOn, setSwitcherOn] = useState(true)
  // let [accordionOn, setAccordionOn] = useState(true)
  let [accordionOn, dispatch] = useReducer(reducer, false);



  return (
    <div className="App">
      <Rating value={ratingCount} setRatingCount={setRatingCount}/>
      <Switcher value={switcherOn} setSwitcherOn={setSwitcherOn}/>
      <Accordion title={'ACCORDION'} open={accordionOn} on={()=> {dispatch({type: 'COLLAPSED'})}} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={e=> e}/>
      {/* <Accordion title={'NEW ACCORDION'} open ={accordionOn} setAccordionOn={setAccordionOn} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={e=> e}/> */}
      <Clock />
      <SelectExample />
    </div>
  );
}

export default App;
