//Function component is the simplest way to create a component
//function component has no state in it so called stateless component

export default function Greeting(){
    return (
        //return should have only one element
        <div>
            <h2>Hi, React</h2>
        </div>
    )
}

//function component also be written as

const Greeting = () => {
    return (
        <div>
            <h2>Hi, React</h2>
        </div>
    )
}