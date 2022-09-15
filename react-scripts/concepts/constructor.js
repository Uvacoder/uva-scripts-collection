// constructor is responsible for assigning the values to a property of an object
// present only in the class component

class Example extends React.Component {
    constructor(props){
        // super() inherits the properties and methods from parent class to the child class
        // we cannot access props without using props and whenever you want get the props, pass the props to super()
        super(props)
        this.state = {
            msg : "hello constructor and super"
        }
    }

    render(){
        return(
            <div>
                <h2>{ this.state.msg }</h2>
            </div>
        )
    }
}