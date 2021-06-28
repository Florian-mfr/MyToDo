import React from 'react';
import Navbar from './Navbar'
import { BsCheck } from 'react-icons/bs'

const ToDoList = () => {
    return (
        <>
            <Navbar />
            <h1>Liste de tâches</h1>
            <ul className="todo_ul">
                <li className='ul_li'>
                    Faire la vaisselle
                    <button className='button-check'><BsCheck /></button>
                </li>
                <li className='ul_li'>
                    Faire la vaisselle
                    <button className='button-check'><BsCheck /></button>
                </li>
                <li className='ul_li'>
                    Faire la vaisselle
                    <button className='button-check'><BsCheck /></button>
                </li>
            </ul>
        </>
    )
}

export default ToDoList;