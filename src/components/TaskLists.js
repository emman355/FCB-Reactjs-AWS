import { useState } from "react";
import Task from "./Task";


const TaskList = () => {
    const [taskItemList, setTaskItemList] = useState([
    "Follow Education.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook"
    ]);
    const [taskValue, setTaskValue] = useState("");

    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    }

    const addTaskItem = () => {
        setTaskItemList([taskValue, ...taskItemList]);
        setTaskValue("");
    }



    return (
        <>
            <input
                type="text"
                className="task-input"
                placeholder="Create a new Task"
                onChange={inputChangeHandler}
                onBlur={addTaskItem}
                value={taskValue}
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