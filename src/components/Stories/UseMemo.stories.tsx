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

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UserSecret = (props: {users:Array<string>}) => {
    console.log('USERS');
    return <div>{props.users.map((u, i)=> <div key={i}>{u}</div> )}</div>
}
const User = React.memo(UserSecret);

export const HelpToReactMemo = () => {
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(['Igor', 'Marta', 'Bohdan','Volodya']);
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addnewuser = () => {
        let newUser = [...users, 'Victor' + new Date().getTime()];
        setUsers(newUser);
    }
    return <>
        <button onClick={()=> {setCounter(counter + 1)}}>+</button>
        <button onClick={() => addnewuser()}>add New User</button>

        <NewMessagesCounter count={counter}/>
        <User users={newArray}/>
    </>
}
export const LikeUseCallback = () => {
    let [counter, setCounter] = useState(0);
    let [book, setBook] = useState(['React', 'Js', 'Css','HTML']);
    const newArray = useMemo(() => {
        const newArray = book.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [book])

    const addnewuser = () => {
        let newBook = [...book, 'REACT' + new Date().getTime()];
        setBook(newBook);
    }
    return <>
        <button onClick={()=> {setCounter(counter + 1)}}>+</button>
        <button onClick={() => addnewuser()}>add New User</button>

        <NewMessagesCounter count={counter}/>
        <Book book={newArray}/>
    </>
}

const BookSecret = (props: {book:Array<string>}) => {
    console.log('Books');
    return <div>{props.book.map((book, i)=> <div key={i}>{book}</div> )}</div>
}

const Book = React.memo(BookSecret);