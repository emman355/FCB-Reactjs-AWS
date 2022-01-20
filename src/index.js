import React from "react";
import ReactDom from "react-dom";


// my first component

function HelloWorld() {
    return <h1>Hello, world!</h1>; // JSX element ---> h1
}

ReactDom.render(<HelloWorld></HelloWorld>, document.getElementById("root"));