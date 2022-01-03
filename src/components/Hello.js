import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello, Welcome to the program</h1>
    //     </div>
    // )

    return React.createElement('div', 'null', React.createElement('h1', null, 'Hello World'))
}

export default Hello