import React, {useState} from 'react'
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
                    <Logo/>
                </div>
                <div className="hamburger">
                    <Hamburger buttonClass={buttonClass} changeClassName={changeClassName}/>
                </div>
            </nav>
            {(buttonClass === 'circle icon close') ? <Modal buttonClass={buttonClass} changeClassName={changeClassName}/> : null }
        </>
    )
}
