import React from 'react'
import './styles/Hamburger.scss'

export default function Hamburger(props) {
    

    return (
        <div id="wrapper" onClick={() => props.changeClassName(props.buttonClass)} className={`${props.buttonClass}`}>
            <div>
                <span className="line top"></span>
                <span className="line bottom"></span>
            </div>
        </div>
    )
}
