import { useState } from "react";
import Task from "./Task";

const taskItemList = [
    "Follow Education.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook"
];
const TaskList = () => {
    const [taskValue, setTaskValue] = useState("Just another task");

    console.log("taskValue :", taskValue)
    
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    }
    return (
        <>
            <input
                type="text"
                className="task-input"
                placeholder="Create a new Task"
                onChange={inputChangeHandler}
            />
            <ul>
                {taskItemList.map((task, index) => {
                    
                    return <Task key={index} taskName={task} />
                }
                )}
            </ul>
        </>
    )
    
}

export default TaskList;