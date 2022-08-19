import React from 'react'
import newsletter from '../images/newsletter.png'
import { User, EnvelopeSimple } from "phosphor-react";

function NewsLetter() {
  return (
    <div className="newsletter">
        <img src={newsletter} alt="newsletter" />
        <div className="newsletter__card">
            <div className="newsletter__text">
                <h3>Se inscreva para receber novidades e promoções</h3>
            </div>
            <div className="newsletter__name">
                <i><User size={24} color="#9F9F9F"/></i>
                <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div className="newsletter__email" >
                <i><EnvelopeSimple size={24} color="#9F9F9F"/></i>
                <input type="email" placeholder="Digite seu e-mail"/>
            </div>
            <button>ENVIAR</button>
        </div>
    </div>

  )
}

export default NewsLetter