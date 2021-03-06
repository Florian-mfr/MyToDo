import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddTask = ({ handleAdd }) => {
    let history = useHistory();

    let [userInput, setUserInput] = useState('')

    const onChange = (e) => {
        userInput = e.currentTarget.value;
        setUserInput(userInput)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        handleAdd(userInput)
        setUserInput(userInput = '')
        history.push('/')
    }
    return (
        <>
            <h1>Ajouter une tâche</h1>
            <form className='todo_addtask' onSubmit={onSubmit} >
                <textarea
                    value={userInput}
                    onChange={onChange.bind(this)}
                    className='addtask_input'
                    placeholder='Écrivez votre nouvelle tâche ici...'
                />
                <button className='addtask_btn'>Ajouter</button>
            </form>
        </>
    )


}

export default AddTask;