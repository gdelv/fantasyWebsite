import React , { useState } from 'react'
import './styles/Slider.scss'
import ImgComp from './ImgComp'

export default function Slider(props) {
    let sliderArr = props.pictureArr.map((pic) => <ImgComp src={pic} />)
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }
    return (
        <div className='slider'>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id='goLeft' onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id='goRight' onClick={goRight}>
            <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}
