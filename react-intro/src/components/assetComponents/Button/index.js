import React from 'react';

export default function Button({title, name}){
    //const buttonData = props; das ist ein objekt

    function handleClick(){
        alert(`hallo ${name}`)
    }

    return(
        <button onClick={handleClick}>
           {title}
        </button>
    )
}

