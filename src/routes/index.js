import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../screens/Home/Home'
import Contact from '../screens/Contact/Contact';
import History from '../screens/History/History';
import TradingBlock from '../screens/Trading Block/TradingBlock';
import TopPlayers from '../screens/Top Players/TopPlayers';


export default function Routes() {
    return (
        <Switch>
            {/* Home Route */}
            <Route
                exact 
                path='/' 
                component={Home}
            />
            <Route
                exact 
                path='/contact' 
                component={Contact}
            />
            <Route
                exact 
                path='/history' 
                component={History}
            />
            <Route
                exact 
                path='/trading-block' 
                component={TradingBlock}
            />
            <Route
                exact 
                path='/top-players' 
                component={TopPlayers}
            />
        </Switch>
    )
}
