import React from 'react'
import Title from '../../Components/Title'
import './History.scss'
import HistoryCard from '../../Components/HistoryCard'
import Footer from '../../Components/Footer'
import { historyArr } from "../../data";

export default function History() {
    return (
        <div>
            <Title 
                title='Past Champions'
                className='has-text-centered is-size-1 history-title primary'
            />
            <div className="card-container">
                {historyArr.map((winner) =>{
                    return (
                        <HistoryCard 
                            year={winner.year}
                            pictureArr={winner.sliderPicsArr} 
                            profilePic={winner.profilePic}
                            ownerName={winner.ownerName}
                            teamName={winner.teamName}
                            teamMVP={winner.teamMVP}
                            mvpPoints={winner.mvpPoints}
                        />
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}
