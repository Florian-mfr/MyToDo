import React from 'react';
import { BsPlusSquare, BsCardChecklist, BsCardList, BsTrashFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="" className='navbar_link'><BsPlusSquare /></a>
            <a href="" className='navbar_link'><BsCardList /></a>
            <a href="" className='navbar_link'><BsCardChecklist /></a>
            <a href="" className='navbar_link'><BsTrashFill /></a>
        </nav>
    )
}
export default Navbar;