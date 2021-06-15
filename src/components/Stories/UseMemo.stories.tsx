import React, { useMemo } from "react";
import { useState } from "react";

export default{
    title: 'useMemo '
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA = 1;
    let resultB = 1;
    resultA = useMemo( () => {
        let tempResultA = 1;
        for (let i= 1; i <= a; i++) {
            let fake = 0;
             while(fake < 1000000) {
                 fake++;
                 let fakeValue = Math.random();
             }
             tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);

    
    for (let i= 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)} />
        <hr />
        <div>
            Result for A = {resultA}
        </div>
        <div>
            Result for B = {resultB}
        </div>
        </>
    
}
