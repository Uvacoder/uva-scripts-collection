import React, { Component } from 'react'

export default class GetData extends Component {
    constructor(){
        super()
        this.state = {
            usres : []
        }
    }

    // the best method to make an API call is to use componentDidMount()
    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(response => this.setState(() => ({
                users : response.data
            })))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {
                    this.state.users.map(user => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                }
            </div>
        )
    }
}
