import React from 'react'
import './styles/ContactCard.scss'
import Title from './Title'

export default function ContactCard(props) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <Title title={props.ownerName} className='has-text-centered is-size-4 primary'/>
                    <Title title={props.teamName} className='has-text-centered is-size-5 secondary'/>
                </div>
            </div>
            <footer class="card-footer">
                <a href={`tel:+1${props.ownerNum}`} className="card-footer-item">Call</a>
                <a href={`sms://+1${props.ownerNum}`} className="card-footer-item">Text</a>
                <a href={`mailto:${props.ownerEmail}`} className="card-footer-item">Email</a>
            </footer>
        </div>
    )
}
