import React, { useState, useEffect } from 'react'
import { api } from "../../services/ApiConfig";
import { NavLink } from "react-router-dom";
import TradeCard from '../../Components/TradeCard';
import Title from '../../Components/Title';
import Footer from '../../Components/Footer'
import './TradingBlock.scss'

export default function TradingBlock() {
    const [tradingBlock, setTradingBlock] = useState([]);
    console.log(tradingBlock);
    useEffect(() => {
        if (!tradingBlock.length) {
            fetchTradingBlock()
            renderTradingBlock()
        }
    },[]);

    async function fetchTradingBlock (){
        try {
            const tradingBlock = await api.get('/trading-block')
            setTradingBlock(tradingBlock.data.reverse())
        } catch(error) {
            throw error
        }
    }

    function renderTradingBlock (){
        if (tradingBlock.length) {
            return (
                <>
                <Title title='Trading Block' className='has-text-centered primary is-size-2'/>
                <div className="button-container" style={{width:'100%'}}>
                        <button className="button is-rounded primary">
                            <NavLink exact to='/trading-block/post'>Post Player</NavLink>
                        </button>
                    </div>
                {tradingBlock.map((player, index) => 
                    <TradeCard 
                        key={index}
                        name={player.name} 
                        image_url={player.image_url} 
                        lookingFor={player.lookingFor}
                    />
                )}
                </>
            )
        } else {
            return (
                <>
                    <Title title='trading block is empty' className='has-text-centered is-uppercase primary is-size-2'/>
                    <div className="button-container">
                        <button className="button is-rounded primary">
                            <NavLink exact to='/trading-block/post'>Post Player</NavLink>
                        </button>
                    </div>
                    <Title title='post a player & what you are looking for in return' className='has-text-centered is-uppercase primary is-size-4'/>
                </>
            )

        }
    }
    return (
        <>
        <div className='tradingblock-container'>
            {renderTradingBlock()}
        </div>
        <Footer/>
        </>
    )
}
