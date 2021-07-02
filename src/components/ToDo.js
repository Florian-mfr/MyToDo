import React from 'react';
import { BsCheck } from 'react-icons/bs'

const ToDo = ({task, toggleCompleted}) => {

    const completed = task.completed
    const handleClick = () => {
        toggleCompleted(task.name)
    }

    return (
        <li className='ul_li'>
            {task.name}
            <button
                onClick={handleClick}
                className={'button-check ' + (completed ? 'green' : null)}>
                <BsCheck />
            </button>
        </li>
    );
};

export default ToDo;