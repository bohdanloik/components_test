import { useMemo, useState } from "react"

export default{
    title: 'useState demo'
}


function generateData() {
    console.log('GENERATE DATA');
    return 12445859948;
}

export const Example = () => {
    console.log('COUNTER');
    // const initValue = useMemo(generateData, []);
    const [counter, setCounter] = useState(generateData);


    return <>
        <button  onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}

    </>

}