//JSX is an xml like extension to javascript, Basically it provides syntactical sugar for React.createElement()
//React.createElement() is an object representaion of JSX


// How JSX looks like

//example 1
const element = (
    <h1 className="greeting">
        Hello world!
    </h1>
)

//convert above JSX to Object representation i.e React.createElement()
// React.createElement() takes 3 arguments
// 1. HTML Tags
// 2. properties of HTML tags like classname
// 3. Child element or value

const element = React.createElement( "h1", {className : "greeting"}, "Hello World!")

//example 2

//JSX
const element = (
    <div>
        <h1 className="greeting">
            Hello world!
        </h1>
    </div>
)

//React.createElement()

const element = React.createElement( "div", null,
                    React.createElement("h1" , { className : "greeting"}, "Hello World!"))

