import React from 'react'
import brinquedos from '../images/brinquedos.png'
import petiscos from '../images/petiscos.png'
import guias from '../images/guias.png'
import higiene from '../images/higiene.png'
import { CaretLeft, CaretRight } from "phosphor-react";

function Categorias() {
  return (
    <div className="categorias">
      <h2>Categorias</h2>
      <div className="categorias__cards">

        <div className="categorias__card glow">
          <img src={brinquedos} alt="" />
          <h4>Brinquedos</h4>
        </div>

        <div className="categorias__card glow">
          <img src={petiscos} alt="" />
          <h4>Petiscos</h4>
        </div>

        <div className="categorias__card glow">
          <img src={guias} alt="" />
          <h4>Guias</h4>
        </div>

        <div className="categorias__card glow">
          <img src={higiene} alt="" />
          <h4>Higiene</h4>
        </div>
      </div>
      <button className="carousel-btn left-btn"><CaretLeft size={24} color="#4D4D4D"/></button>
      <button className="carousel-btn right-btn"><CaretRight size={24} color="#4D4D4D"/></button>
    </div>
  )
}

export default Categorias