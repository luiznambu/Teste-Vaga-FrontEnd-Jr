import React from 'react'
import background from '../images/background.png'
import { CaretLeft, CaretRight } from "phosphor-react";

function Hero() {

  return (
    <div className="hero" style={{ 
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
        }}>
        
        <div className="hero__leftArrow">
            <CaretLeft size={30} color="white"/>
        </div>
        <div className="hero__left">
            <h1>As melhores guias para os melhores passeios.</h1>
            <button>CONFIRA</button>
        </div>
        <div className="hero__mid"></div>
        <div className="hero__right"></div>
        <div className="hero__rightArrow">
            <CaretRight size={30} color="white"/>
        </div>

    </div>
  )
}

export default Hero