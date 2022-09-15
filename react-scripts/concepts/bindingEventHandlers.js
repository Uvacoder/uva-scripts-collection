import React, { Component } from 'react'

// There are 3 ways to bind an event handlers in react
// 1. Bind event handlers in constructor
// 2. Using Arrow function
// 3. Inline binding

export default class BindingEventHandlers extends Component {
    constructor(){
        super()
        this.state = {
            message : ""
        }
        this.sayHello = this.sayHello.bind(this)
    }

    // for this function, we have to bind it in the constructor like line 14
    sayHello(){
        this.setState({ message : "Hello"})
    }

    // Using Arrow function we dont have to bind this function in constructor
    sayHi = () => {
        this.setState({ message : "Hi"})
    }

    // inline binding
    greeting(){
        this.setState({ message : "Good Morning"})
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.sayHello}>say hello</button>
                <button onClick={this.sayHi}>say hi</button>
                <button onClick={() => this.greeting().bind(this)}>say good morning</button>
            </div>
        )
    }
}
