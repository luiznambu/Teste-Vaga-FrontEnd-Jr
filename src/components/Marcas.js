import React from 'react'
import marca1 from '../images/marca1.png'
import marca2 from '../images/marca2.png'
import marca3 from '../images/marca3.png'
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'

function Marcas() {
  return (
    <div className="container">
        <h2>Principais marcas</h2>
        <div className="marcas">
            <div className="marcas__card">
                <img src={marca1} alt="marca1" />
            </div>
            <div className="marcas__card">
                <img src={marca2} alt="marca2" />
            </div>
            <div className="marcas__card">
                <img src={marca3} alt="marca3" />
            </div>
            <div className="marcas__card">
                <img src={marca1} alt="marca1" />
            </div>
            <div className="marcas__card">
                <img src={marca2} alt="marca2" />
            </div>
            <div className="marcas__card">
                <img src={marca3} alt="marca3" />
            </div>
        </div>
        <div className="marcas__parceiros">
            <div className="marcas__banner gradient" style={{
                // backgroundImage:`url(${banner1})`,
                background: `linear-gradient(rgba(0, 0, 0, 0), #000), url(${banner1})`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover'
                }}>
                <div className="marcas__text">
                    <h1>Parceiros</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>CONFIRA</button>
                </div>

            </div>
            <div className="marcas__banner banner2">
                <div className="marcas__text">
                    <h2>Assinatura Cãoselheiro</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
                    <button>SAIBA MAIS</button>
                </div>
                <img src={banner2} alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default Marcas