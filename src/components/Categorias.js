import React from 'react'
import brinquedos from '../images/brinquedos.png'
import petiscos from '../images/petiscos.png'
import guias from '../images/guias.png'
import higiene from '../images/higiene.png'

function Categorias() {
  return (
    <div className="categorias">
      <h2>Categorias</h2>
      <div className="categorias__cards">

        <div className="categorias__card">
          <img src={brinquedos} alt="" />
          <h4>Brinquedos</h4>
        </div>

        <div className="categorias__card">
          <img src={petiscos} alt="" />
          <h4>Petiscos</h4>
        </div>

        <div className="categorias__card">
          <img src={guias} alt="" />
          <h4>Guias</h4>
        </div>

        <div className="categorias__card">
          <img src={higiene} alt="" />
          <h4>Higiene</h4>
        </div>

      </div>
    </div>
  )
}

export default Categorias