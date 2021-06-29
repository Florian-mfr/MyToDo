import React, { Component } from 'react';
import { BsCheck } from 'react-icons/bs'

class ToDo extends Component {
    render() {
        return (
            <li className='ul_li'>
                {this.props.task.name}
                <button className='button-check'><BsCheck /></button>
            </li>
        );
    }
}

export default ToDo;