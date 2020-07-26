import React from 'react'
import './styles/HistoryCard.scss'
import Title from './Title'
import Slider from './Slider'

export default function HistoryCard(props) {
    return (
        <div class="card history-card">
            <Title title={props.year} className='secondary has-text-centered is-size-3 history-card-title'/>
            <div class="card-image">
                    <Slider pictureArr={props.pictureArr}/>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img src={props.profilePic} alt="Owner"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <Title title={props.ownerName} className='is-size-3 has-text-centered'/> 
                        <Title title={props.teamName} className='is-size-4  has-text-centered'/> 
                    </div>
                </div>
                <div class="content">
                    <Title title={props.teamMVP} className='is-size-5 has-text-centered'/>
                    <Title title={`${props.mvpPoints} Points`} className='is-size-6 has-text-centered'/>
                </div>
            </div>
        </div>
    )
}
