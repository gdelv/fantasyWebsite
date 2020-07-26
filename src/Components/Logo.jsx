import React from 'react'
import './styles/Logo.scss'
import logo from '../images/theleague-logo.png'


export default function Logo() {
    return (
        <img src={logo} alt="logo" className='logo'/>
    )
}
