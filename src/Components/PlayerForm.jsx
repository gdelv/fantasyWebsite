import React from 'react'
import InputComp from './InputComp'

export default function PlayerForm(props) {
    const { onChange, onSubmit } = props
    const {name, image_url, lookingFor } = props.formData
    return (
        <form className='form' onSubmit={e => onSubmit(e)}>
            <InputComp 
                name='name'
                value={name}
                className='center' 
                type='text' 
                placeholder='Player Name'
                onChange={e => onChange(e)}
                required={true}
            />
            <InputComp 
                name='image_url'
                value={image_url}
                className='center' 
                type='text' 
                placeholder='Player Image'
                onChange={e => onChange(e)}
                required={false}
            />
            <InputComp 
                name='lookingFor'
                value={lookingFor}
                className='center' 
                type='text' 
                placeholder='Looking for...'
                onChange={e => onChange(e)}
                required={true}
            />
            <button className="button is-success is-outline">Submit</button>
        </form>
    )
}
