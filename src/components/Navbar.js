import React from 'react';
import { NavLink } from 'react-router-dom'
import { BsPlusSquare, BsCardList, BsTrashFill } from "react-icons/bs";

const Navbar = ({deleteTask}) => {
    
    return (
        <nav className='navbar'>
            <NavLink exact to='/' className='navbar_link' activeClassName='active'>
            <div><BsCardList /></div>
            </NavLink>
            <NavLink exact to='/add-task' className='navbar_link' activeClassName='active'>
            <div><BsPlusSquare /></div>
            </NavLink>
            <button onClick={deleteTask} className='navbar_link'><BsTrashFill /></button>
        </nav>
    )
}
export default Navbar;