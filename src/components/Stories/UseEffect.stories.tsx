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