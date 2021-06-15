export default{
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const User = (props: {user:Array<string>}) => {
    return <div>{props.user.map((u, i)=> <div>{u}</div> )}</div>
}

export const Example1 = () => {
    return <>
        <NewMessagesCounter count={10}/>
        <User user={['Igor', 'Marta', 'Bohdan']}/>
    </>
}