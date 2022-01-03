import React from "react";

// function Greet() {
//     return <h1>Hello Sakshi</h1>
// }

//Using Arrow Functions
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            {props.children}
        </div>
    )
}
export default Greet