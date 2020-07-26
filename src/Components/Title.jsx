import React from 'react'
import './styles/Title.scss'

export default function Title(props) {
    return (
        <div className={`title ${props.className}`}>
            {props.title}
        </div>
    )
}
