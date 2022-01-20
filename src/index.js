import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Task = (props) => {
    return (
        <li className="tasks-item">{props.taskName}</li>
    );
}

const TaskList = () => {
    return (
        <ul>
            <Task taskName="Follow Education.ph on Facebook"/>
            <Task taskName="Follow AWS Siklab Pilipinas on Facebook"/>
            <Task taskName="Follow Zuitt Coding Bootcamp on Facebook"/>
        </ul>
    )
    
}

const App = () => {
    const paraStyle = {
        "marginBottom": "15px",
    };
    return (
        <div className="app">
            <header className="app-header">
                <h1 >My Amazing ToDo-List App</h1>
                <p style={paraStyle}>The most simple and amazing todo-list React App.</p>
                <TaskList/>
            </header>
        </div>
        
    )
}

ReactDom.render(<App/>, document.getElementById("root"));