import { useState } from "react";


export default{
    title: 'useEffect demo'
}

export const Exemple = () => {
    const [counter, setCounter] = useState(1);

    return <>
        <h1>Hello {{counter}}</h1>
        <button  onClick={() => {setCounter(state => state +1 )}}>+</button>
        
    </>
}