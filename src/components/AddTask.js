import React from 'react';
import Navbar from './Navbar'

const AddTask = () => {
    return (
        <>
            <Navbar />
            <form>
                <input type='text' />
                <button>Ajouter</button>
            </form>
        </>
    )
}

export default AddTask;