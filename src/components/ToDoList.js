import React from 'react';
import ToDo from './ToDo'
import TaskList from '../TaskList'

const ToDoList = () => {
    return (
        <>
            <h1>Liste de tâches</h1>
            <ul className="todo_ul">
                {
                    TaskList.map((task) => <ToDo task={task} />)
                }
            </ul>
        </>
    )
}

export default ToDoList;