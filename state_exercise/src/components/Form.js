import React, {useState} from 'react';

export default function Form(){

    const [firstname, setFirstname] = useState(""); // besteht aus GETTER und SETTER

    function handleChange(event){
     
        setFirstname(event.target.value) //speichert den aktuell state von firstname

    }

    function handleClick(e){
        e.preventDefault(); //das löscht das natürliche verhalten eines Buttons in einem Form-TAG
        console.log(`mein Name ist ${firstname}`)
    }


    return(
        <form >
            <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange}/><br/>
           <button onClick={handleClick}>Send</button>
        </form>
    )
}