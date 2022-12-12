import React from 'react';
import ListItem from './ListItem';

export default function ToDoListOutput({list}){

    console.log("to do output",list)

    const myList = list.map((item, index)=>{

        return(<ListItem key={index} item={item}/>)


    })

    console.log("die listenelemente",myList)

    return(
        <ul>
            {myList}
        </ul>
    )
}