import React, { useEffect, useState } from 'react';
import Button from "../../components/Button";
import styles from "./todo.module.css";


function Todo () {
    const [todo, setTodo] = useState("");
    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
    }
    return (
        <div>
            <form onSubmit={onSubmit} className={styles.todoForm}>
                <input onChange={onChange} type={"text"} placeholder={"Write your to do..."} />
                <Button name={"Add to do"} />
            </form>
        </div>
    );
};

export default Todo;