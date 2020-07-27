import React from 'react'
import './styles/ContactCard.scss'
import Title from './Title'

export default function ContactCard() {
    return (
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <Title title='Owner Name' className='has-text-centered'/>
                    <Title title='Team Name' className='has-text-centered'/>
                </div>
            </div>
            <footer class="card-footer">
                <a href="tel:+15168643657" class="card-footer-item">Call</a>
                <a href="sms://+15168643657" class="card-footer-item">Text</a>
                <a href="mailto:giudelvecchio@gmail.com" class="card-footer-item">Email</a>
            </footer>
        </div>
    )
}
