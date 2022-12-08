import React from 'react';
import styles from '../styles/Header.module.css';
import Form from './Form';
import UserForm from './UserForm';
import CheckList from './CheckList';
import ToDoListWrapper from './ToDoList/ToDoListWrapper';

function Header(){

    
    return(
        <header className={styles.headerStyling}>
            <h1>State Exercise</h1>

            {/* <Form/> */}
            {/* <UserForm/> */}
            {/* <CheckList/> */}
            <ToDoListWrapper/>
        </header>
    )
}

export default Header