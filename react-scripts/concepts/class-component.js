// class component has state in it
// Also called statefull component

import React, { Component } from 'react';

class Greeting extends React.Component{
    state = {
        msg : "Hello React!"
    }

    render(){
        return (
            <div>{this.state.msg}</div>
        )
    }
}

//When to use class component and function component ?
// If a component needs a state or lifecycle methods, then use class component otherwise use function  component