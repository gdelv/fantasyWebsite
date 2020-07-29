import React from 'react'
import './styles/HistoryCard.scss'
import Title from './Title'
import Slider from './Slider'

export default function HistoryCard(props) {
    return (
        <div className="card history-card">
            <Title title={props.year} className='secondary has-text-centered is-size-3 history-card-title'/>
            <div className="card-image">
                    <Slider pictureArr={props.pictureArr}/>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img src={props.profilePic} alt="Owner"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <Title title={props.ownerName} className='is-size-4 has-text-centered primary'/> 
                        <Title title={props.teamName} className='is-size-6  has-text-centered secondary'/> 
                    </div>
                </div>
                <div className="content">
                    <Title title={`Team MVP: ${props.teamMVP}`} className='is-size-5 has-text-centered secondary'/>
                    <Title title={`${props.mvpPoints} Points`} className='is-size-6 has-text-centered secondary'/>
                </div>
            </div>
        </div>
    )
}
