import React, {useState} from 'react';

export default function CheckList(){


    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");

function handleChange(event){
    setTask(event.target.value);
}

function addTask(e){
    e.preventDefault();
    setTaskList(prev=>[...prev, task])
    
}

const color = false;

    return(
       
        <form>
            {color ? <h1>color</h1>: <h1>no color</h1>}
            <input type="text" name="task" placeholder="New Task" onChange={handleChange}/><br/>
            <button onClick={addTask}>Add Task</button>
            
        </form>

    )
}