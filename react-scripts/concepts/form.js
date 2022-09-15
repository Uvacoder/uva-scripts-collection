import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            name : "",
            email : "",
            password : ""
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    handleSubmit = (e) => {
        // preventDefault() prevents the default behaviour of the browser. it does not reload the browser
        e.preventDefault()
        const formData = this.state
        console.log(formData)
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <h4>Name:</h4>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    >
                    </input>
                    <br/>
                    <h4>Email:</h4>
                    <input
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    >
                    </input>
                    <br/>
                    <h4>Password:</h4>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    >
                    </input>
                    <br/>
                    <input type="submit">Submit</input>
                </form>
            </div>
        )
    }
}
