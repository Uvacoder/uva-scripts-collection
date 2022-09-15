// State is an object which holds some information about the parent component that may change over the life time of the component
// state only be used in the class component
//state is used for only an internal communication inside a component
// Fully controlled by the class component

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