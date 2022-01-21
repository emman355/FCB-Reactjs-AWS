import Task from "./Task";


const TaskList = () => {
    const taskItemList = [
        "Follow Education.ph on Facebook",
        "Follow AWS Siklab Pilipinas on Facebook",
        "Follow Zuitt Coding Bootcamp on Facebook"
    ];

    return (
        <>
            <input type="text" className="task-input"/>
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