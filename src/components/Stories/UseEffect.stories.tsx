import { useEffect, useState } from "react";


export default{
    title: 'useEffect '
}

export const Example = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);


    console.log('Example');
    
    useEffect(()=> {
        console.log('useEffect every render');
        document.title = counter.toString();

        
    })
    useEffect(()=> {
        console.log('useEffect render only when component init');
        document.title = counter.toString();

        
    }, [])
    useEffect(()=> {
        console.log('useEffect render when component init and all time when counter change');
        document.title = counter.toString();

        
    }, [counter])

    return <>
        <h1>True {counter}</h1>
        <button  onClick={() => {setCounter(counter + 1)}}>+</button>
        <button  onClick={() => {setFake(fake + 1)}}>+ FAKE</button>
        <h1>Fake {fake}</h1>
        
    </>
}
export const ExampleSiteTimeOut = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);


    console.log('Example');
    
    useEffect(()=> {

        // setTimeout(() => {
        // console.log('setTimeOut');
        // document.title = counter.toString();  
        // }, 2000);

        setInterval(() => {
            console.log('setInterval');
            setCounter((state) => state + 1)
        }, 10000)
    },[])


    return <>
        <h1>True {counter}</h1>
        <button  onClick={() => {setCounter(counter + 1)}}>+</button>
        <button  onClick={() => {setFake(fake + 1)}}>+ FAKE</button>
        <h1>Fake {fake}</h1>
        
    </>
}

export const ResetEffectExample = () => {
    console.log('Component rendered');


    const [counter, setCounter] = useState(0)
    

    useEffect(() => {
      console.log('useEffect occured' + counter);

      return () => {
          console.log('Reset Effect');
          
      }
        
    }, [counter])

    const increase = () => {setCounter(counter +1)};

    return <>
    
    <h1>Counter : {counter}</h1>
    <button onClick={increase}>+</button>
    
    </>
}
export const KeysTrackerExample = () => {
    console.log('Component rendered ');


    const [text, setText] = useState('')
    

    useEffect(() => {
      window.addEventListener('keypress', (e)=>{
          console.log(e.key);
          setText((state) => state + e.key)
          
      })
        
    }, [])

    return <>
    
    <h1>Typed Text : {text}</h1>
    
    </>
}