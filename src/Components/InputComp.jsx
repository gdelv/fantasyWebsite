import React from 'react'
import './styles/InputComp.scss'

export default function InputComp(props) {
    return (
        <input className={props.className} type={props.type} placeholder={props.placeholder}/>
    )
}
