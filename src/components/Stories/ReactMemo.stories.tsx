import React from "react"
import { useState } from "react"

export default{
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UserSecret = (props: {user:Array<string>}) => {
    console.log('USERS');
    return <div>{props.user.map((u, i)=> <div key={i}>{u}</div> )}</div>
}
const User = React.memo(UserSecret);
export const Example1 = () => {
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(['Igor', 'Marta', 'Bohdan','Volodya']);

    const addnewuser = () => {
        let newUser = [...users, 'Victor' + new Date().getTime()];
        setUsers(newUser);
    }
    return <>
        <button onClick={()=> {setCounter(counter + 1)}}>+</button>
        <button onClick={addnewuser}>add New User</button>

        <NewMessagesCounter count={counter}/>
        <User user={users}/>
    </>
}