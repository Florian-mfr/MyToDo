import React from 'react';
import { NavLink } from 'react-router-dom'
import { BsPlusSquare, BsCardList, BsTrashFill } from "react-icons/bs";

const Navbar = () => {
    const deleteTask = () => {
        console.log('delete')
    }
    return (
        <nav className='navbar'>
            <NavLink exact to='/'>
            <div className='navbar_link'><BsCardList /></div>
            </NavLink>
            <NavLink exact to='/add-task'>
            <div className='navbar_link'><BsPlusSquare /></div>
            </NavLink>
            <button onClick={deleteTask} className='navbar_link'><BsTrashFill /></button>
        </nav>
    )
}
export default Navbar;