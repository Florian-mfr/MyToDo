import React from 'react';

const AddTask = () => {
    return (
        <>
            <h1>Ajouter une tâche</h1>
            <form className='todo_addtask'>
                <textarea className='addtask_input'>
                    Écrivez votre nouvelle tâche ici...
                </textarea>
                <button className='addtask_btn'>Ajouter</button>
            </form>
        </>
    )
}

export default AddTask;