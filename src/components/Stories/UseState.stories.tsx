import { useMemo, useState } from "react"

export default{
    title: 'useState demo'
}


function generateData() {
    console.log('GENERATE DATA');
    return 1;
}

export const Example = () => {
    console.log('COUNTER');
    // const initValue = useMemo(generateData, []);
    const [counter, setCounter] = useState(generateData);
    // const changer = (state: number) => {
    //     debugger
    //     return state +1
    // }

    return <>
        <button  onClick={() => {setCounter(state => state +1 )}}>+</button>
        {counter}

    </>

}