import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

    function addTask() {
        setTasks([...tasks, `Task ${tasks.length + 1}`]);
    }

    return (
        <div>
            <ul>
                {
                    tasks.map((task) => (
                        <li>{task}</li>
                    ))
                }
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default ToDoList;