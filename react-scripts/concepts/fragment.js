// React.Fragment
// The React.Fragment component lets you return multiple elements in a render() method
//    without creating an additional DOM element

class Fragment extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h2>This is the React.Fragment example</h2>
                <div>
                    <h3>hi, I am React Fragment</h3>
                </div>
            </React.Fragment>
        )
    }
}

// <React.Fragment>Hello</React.Fragment> also be written as <>Helloo</>

class Fragment extends React.Component{
    render(){
        return(
            <>
                <h2>This is the React.Fragment example</h2>
                <div>
                    <h3>hi, I am React Fragment</h3>
                </div>
            </>
        )
    }
}