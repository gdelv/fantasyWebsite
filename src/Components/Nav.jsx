import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import './styles/Nav.scss'
import Hamburger from './Hamburger'
import Logo from './Logo'
import Modal from './Modal'

export default function Nav() {
    const [buttonClass, setButtonClass] = useState('circle icon');

    const changeClassName = (state) => {
        if(state === 'circle icon') {
            setButtonClass('circle icon close')
        } else if(state === 'circle icon close') {
            setButtonClass('circle icon')
        }
    }
    return (
        <>
            <nav>
                <div className='logo'>
                    <NavLink exact to='/'>
                        <Logo/>
                    </NavLink>
                </div>
                <div className="button-container">
                    <button className="button is-link is-inverted is-rounded primary">
                        <NavLink exact to='/trading-block/post' onClick={() => changeClassName(buttonClass)}>Post Player</NavLink>
                    </button>
                </div>
                <div className="hamburger">
                    <Hamburger buttonClass={buttonClass} changeClassName={changeClassName}/>
                </div>
            </nav>
            {(buttonClass === 'circle icon close') ? <Modal buttonClass={buttonClass} changeClassName={changeClassName}/> : null }
        </>
    )
}
