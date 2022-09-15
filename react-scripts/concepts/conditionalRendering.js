// Conditional rendering in react

class ConditionalRendering extends React.Component{
    constructor(){
        super()
        this.state = {
            show : false
        }
    }

    toggleShow = () => {
        this.setState((prevState) => ({
            show : !prevState.show
        }))
    }

    render(){
        return(
            <div>
                {
                    this.state.show ? <h2>I am visible</h2> : <h2>I am invisible</h2>
                }
                <button onClick={this.toggleShow}>Toggle show</button>
            </div>
        )
    }
}