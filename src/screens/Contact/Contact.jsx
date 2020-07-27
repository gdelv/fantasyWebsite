import React from 'react'
import Title from '../../Components/Title'
import './Contact.scss'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import { contactArr } from "../../data";

export default function Contact() {
    return (
        <div>
            <Title title='Contacts List' className='contact-title primary has-text-centered'/>
            <div className="contact-container">
                {contactArr.map((contact) =>
                    <ContactCard 
                        ownerName={contact.teamOwner}
                        teamName={contact.teamName}
                        ownerNum={contact.ownerNum}
                        ownerEmail={contact.ownerEmail}
                    />
                )}
            </div>
            <Footer/>
        </div>
    )
}
