import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checked, Rating } from './components/Rating/Rating';
import { Accordion } from './components/Accordion/Accordion';
import { Switcher } from './components/Switcher/Switcher';

function App() {
  let [ratingCount, setRatingCount] = useState<Checked>(0);
  let [switcherOn, setSwitcherOn] = useState(true)
  console.log(switcherOn)
  let [accordionOn, setAccordionOn] = useState(true)
  return (
    <div className="App">
      <Rating value={ratingCount} setRatingCount={setRatingCount}/>
      <Switcher value={switcherOn} setSwitcherOn={setSwitcherOn}/>
      <Accordion title={'ACCORDION'} open={accordionOn} setAccordionOn={setAccordionOn} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={e=> e}/>
      <Accordion title={'NEW ACCORDION'} open ={accordionOn} setAccordionOn={setAccordionOn} item={[{title: 'e', value: 1},{ title: 'b', value: 2}]} onclick={e=> e}/>
    </div>
  );
}

export default App;
