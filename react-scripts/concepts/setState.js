//We should not update the state directly, if we try to update the state directly, the component will not get re-render
//Instead we use setState() method

// setState() is an asynchronous callback function,
//when the state of the component changes, it will re-render the component with the updated state.


//example

class SetState extends React.Component{
    state = {
        msg = ""
    }
    //when you hit the button, this function gets called and sets the state with the msg
    sayHello = () => {
        this.setState({ msg : "Hello"})
    }

    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <button onClick={this.sayHello}> say hello </button>
            </div>
        )
    }
}
