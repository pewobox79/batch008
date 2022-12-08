import React, {useState} from 'react';

export default function ToDoListForm({setToDoListItems}){


const [newToDo, setNewToDo]= useState("")

    function handleChange(event){
        setNewToDo(event.target.value)
    }

    function addNewItem(e){
        e.preventDefault();
        setToDoListItems(prev =>[...prev, newToDo])

    }


    return(
        <form>
            <input type="text" name="todo" placeholder="Add ToDo" onChange={handleChange} />
            <button onClick={addNewItem}>Add New ToDo</button>
        </form>
    )
}