// Props are input to the components
// Props also an object containing a set of values that are passed to the child component from parent component

//let create a parent component

class Parent extends React.Component{
    state = {
        msg  : "Hello, React"
    }

    render(){
        return(
            <div>
                <Child msg={this.state.msg} />
                <Child2 msg={this.state.msg} />
            </div>
        )
    }
}

//passing msg as a props to function component and we can get it as this.props.msg
const Child = (props) => {
    return (
        <div>
            <h2>{this.props.msg}</h2>
        </div>
    )
}

//passsing msg as a props to class component and we can get it as this.state.props.msg
class Child2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>{this.state.props.msg}</h2>
            </div>
        )
    }
}