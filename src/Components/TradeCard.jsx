import React from 'react'
import Title from '../Components/Title'
import './styles/TradeCard.scss'

export default function TradeCard(props) {
    return (
        <div class="card trade-card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={props.img} alt="Placeholder"/>
                </figure>
            </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <Title title={props.name} className='has-text-centered'/>
                            <Title title={props.lookingFor} className='has-text-centered'/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
