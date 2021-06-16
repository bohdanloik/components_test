import React, { useEffect, useState } from 'react';


type PropsType = {

}
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    const get2digitString = (num: number) => num < 10 ? '0' + num : num;

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }

    }, [])
    return <div>
        <span>{get2digitString(date.getHours())}</span>
        :
        <span>{get2digitString(date.getMinutes())}</span>
        :
        <span>{get2digitString(date.getSeconds())}</span>
    </div>
}