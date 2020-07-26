import React from 'react'
import './styles/HistoryCard.scss'
import Title from './Title'
import s1 from '../images/13-14/13-14bracket.jpg'
import profilePic from '../images/headshot.jpeg'

export default function HistoryCard() {
    return (
        <div class="card history-card">
            <Title title='2019-20' className='secondary has-text-centered is-size-3 history-card-title'/>
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={s1} alt="carousel"/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img src={profilePic} alt="Owner"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <Title title='Owner Name' className='is-size-3 has-text-centered'/> 
                        <Title title='Team Name' className='is-size-4  has-text-centered'/> 
                    </div>
                </div>
                <div class="content">
                    <Title title='MVP: Patrick Mahomes' className='is-size-5 has-text-centered'/>
                    <Title title='Total: 301 Points' className='is-size-6 has-text-centered'/>
                </div>
            </div>
        </div>
    )
}
