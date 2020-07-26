import React from 'react'
import Title from '../../Components/Title'
import './History.scss'
import HistoryCard from '../../Components/HistoryCard'
import Footer from '../../Components/Footer'

export default function History() {
    return (
        <div>
            <Title 
                title='Past Champions'
                className='has-text-centered is-size-1 history-title primary'
            />
            <div className="card-container">
                <HistoryCard/>
                <HistoryCard/>
                <HistoryCard/>
                <HistoryCard/>
                <HistoryCard/>
            </div>
            <Footer/>
        </div>
    )
}
