import React from 'react'
import Title from '../../Components/Title'
import './Contact.scss'
import ContactCard from '../../Components/ContactCard'
// import { contactArr } from "../../data";

export default function Contact() {
    return (
        <div>
            <Title title='Contacts List' className='contact-title primary has-text-centered'/>
            <div className="contact-container">
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
            </div>
        </div>
    )
}
