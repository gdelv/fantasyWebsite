import React, { useState } from 'react'
import { useHistory  } from "react-router-dom";
import Title from '../../Components/Title'
import PlayerForm from '../../Components/PlayerForm'
import { api } from '../../services/ApiConfig'

export default function PostPlayer() {
    const history = useHistory()
    const [state, setState] = useState({
        name: "",
        image_url: "",
        lookingFor: "",
        errorMsg: ""
    })
    // console.log(state);
    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        }); 
    }
    function handleSubmit (e) {
        e.preventDefault()
        const { name, image_url , lookingFor } = state
        const data = {
            name,
            image_url,
            lookingFor
        }
        api.post('/trading-block', data)
            .then((resp) => resp.status === 201 ? navigateToTradeBlock() : null)
            .catch(() => setState({
                errorMsg: 'There was an error posting player'
            }))
    }
    function navigateToTradeBlock () {
        history.push('/trading-block');
    }

    const { name, image_url , lookingFor, errorMsg } = state
    return (
        <div className='player-form'>
            <Title 
                title='Trading Block form' 
                className='has-text-centered primary is-size-2 is-capitalized form-title'
            />
            <PlayerForm
                formData={{ name, image_url, lookingFor }}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {errorMsg ? <p className="has-text-danger">{errorMsg}</p> : null  }
        </div>
    )
}
