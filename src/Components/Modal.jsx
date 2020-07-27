import React from 'react'
import { NavLink } from "react-router-dom";
import './styles/Modal.scss'

export default function Modal(props) {
    console.log(props);
        return (
        <div className="modal">
            <NavLink exact to='/' onClick={() => props.changeClassName(props.buttonClass)}>
                Home
            </NavLink>
            <NavLink exact to='/history' onClick={() => props.changeClassName(props.buttonClass)}>
                History                   
            </NavLink>
            <NavLink exact to='/contact' onClick={() => props.changeClassName(props.buttonClass)}>
                Contacts
            </NavLink>
            <NavLink exact to='/trading-block' onClick={() => props.changeClassName(props.buttonClass)}>
                Trading Block
            </NavLink>
            <NavLink exact to='/trading-block/post' onClick={() => props.changeClassName(props.buttonClass)}>
                Post Player
            </NavLink>
            <NavLink exact to='/top-players' onClick={() => props.changeClassName(props.buttonClass)}>
                Top Players
            </NavLink>
        </div>
    )
}
