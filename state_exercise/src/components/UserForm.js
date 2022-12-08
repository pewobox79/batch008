import React, {useState} from 'react';

export default function UserForm(){

    const [user, setUser] = useState({
        firstname: "", //key : value - pair
        lastname: "",
        age: ""
    });

    function handleChange(event){

        setUser(prev=>({...prev, [event.target.name]: event.target.value}))
    
    }

    console.log("aktueller user",user);

    function handleSubmit(e){
        e.preventDefault();
        console.log("user data submitted", user)
    }

    return(
        <form>
            <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange}/><br/>
            <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} /><br/>
            <input type="text" name="age" placeholder="Your Age" onChange={handleChange} /> <br/>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    )
}