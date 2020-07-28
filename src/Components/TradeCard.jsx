import React from 'react'
import Title from '../Components/Title'
import './styles/TradeCard.scss'

export default function TradeCard(props) {
    return (
        <div class="card trade-card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={props.image_url} alt="player"/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <Title 
                            title={props.name} 
                            className='has-text-centered is-capitalized primary'
                        />
                        <Title 
                            title={`Looking for: ${props.lookingFor}`} 
                            className='has-text-centered is-capitalized secondary is-size-4'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
