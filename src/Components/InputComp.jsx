import React from 'react'
import './styles/InputComp.scss'

export default function InputComp({onChange, name, placeholder, required, value, className, type}) {
    return (
        <>
            <input 
                className={className} 
                type={type}  
                value={value}
                required={required}
                onChange={e => onChange(e)}
                placeholder={placeholder}
                name={name}
            />
            {/* <label htmlFor={name}>
                <span>{placeholder}</span>
            </label> */}
        </>
    )
}
