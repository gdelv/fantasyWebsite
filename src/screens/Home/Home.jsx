import React from 'react'
import './Home.scss'
import Overlay from '../../Components/Overlay'
import Title from '../../Components/Title'

export default function Home() {
    return (
        <div className='home-container'>
            <Title 
                title='THE LEAGUE' 
                className='home-title primary'
            />
            <Overlay/>
        </div>
    )
}
