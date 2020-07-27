import React, { useState, useEffect } from 'react'
import { api } from "../../services/ApiConfig";
import TradeCard from '../../Components/TradeCard';
import Title from '../../Components/Title';
import './TradingBlock.scss'

export default function TradingBlock() {
    const [tradingBlock, setTradingBlock] = useState([]);

    useEffect(() => {
        fetchTradingBlock()
    });

    async function fetchTradingBlock (){
        try {
            const tradingBlock = await api.get('/trading-block')
            setTradingBlock(tradingBlock.data)
        } catch(error) {
            throw error
        }
    }

    function renderTradingBlock (){
        if (tradingBlock.length) {
            return (
                <>
                <Title title='Trading Block' className='has-text-centered primary is-size-2'/>
                {tradingBlock.map((player) => 
                    <TradeCard 
                        name={player.name} 
                        img={player.img} 
                        lookingFor={player.lookingFor}
                    />
                )}
                </>
            )
        } else {
            return (
                <>
                    <Title title='trading block is empty' className='has-text-centered is-uppercase'/>
                    <Title title='post a player & what you are looking for in return' className='has-text-centered'/>
                </>
            )

        }
    }
    return (
        <div className='tradingblock-container'>
            {renderTradingBlock()}
            {console.log(tradingBlock)}
        </div>
    )
}
