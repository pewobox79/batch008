import React, {useState} from 'react';
import ToDoListForm from './ToDoListForm';
import ToDoListOutput from './ToListOutput';

export default function ToDoListWrapper(){

    const [toDoListItems, setToDoListItems] = useState([])

    return(
        <div>
            <h1>To Do List</h1>
            <ToDoListForm setToDoListItems={setToDoListItems}/>
            <ToDoListOutput list={toDoListItems}/>

        </div>
    )
}