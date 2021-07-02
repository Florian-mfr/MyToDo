import React from 'react';
import ToDo from './ToDo'

const ToDoList = ({tasks, toggleCompleted}) => {
    return (
        <>
            <h1>Liste de tâches</h1>
            <ul className="todo_ul">
                {
                    tasks.map((task) => <ToDo key={task.name} task={task} toggleCompleted={toggleCompleted} />)
                }
            </ul>
        </>
    )
}

export default ToDoList;