import React from 'react'
import InputComp from '../../Components/InputComp'
import Title from '../../Components/Title'

export default function PostPlayer() {
    return (
        <div className='player-form'>
            <Title title='Trading Block form' className='has-text-centered primary is-size-2 is-capitalized form-title'/>
            <InputComp className='center' type='text' placeholder='Player Name'/>
            <InputComp className='center' type='text' placeholder='Player Image'/>
            <InputComp className='center' type='text' placeholder='Looking for...'/>
            <button className="button is-success is-outline">Submit</button>
        </div>
    )
}
