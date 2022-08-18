import React from 'react'
import { Link } from 'react-router-dom'
import { CrownSimple, Truck, ShieldCheck, CreditCard, Package, Heart, UserCircle, ShoppingCart, MagnifyingGlass } from "phosphor-react";
import logo from '../images/logo.png'


function Header() {
  return (
    <div className="header">
        <div className="header__info">
            <ul className="header__items">
                <li className="header__item"><ShieldCheck size={20} />Compra <span className="yellow">100% segura</span></li>
                <li className="header__item"><Truck size={20}/><span className="yellow">Frete grátis</span > acima de R$ 200</li>
                <li className="header__item"><CreditCard size={20} /><span className="yellow">Parcele</span> suas compras</li>
            </ul>
        </div>
        <div className="header__midRow">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <form action="/">
                <div className="header__midCol">
                    <input type="search" placeholder="O que você está buscando?" className="header__searchBar"/>
                </div>
                <button type="submit" className="search-btn">
                    <MagnifyingGlass size={23}/>
                </button>
            </form>
            <div>
                <ul className="header__links">
                    <li><Link to='/'><Package size={35}/></Link></li>
                    <li><Link to='/'><Heart size={35}/></Link></li>
                    <li><Link to='/'><UserCircle size={35}/></Link></li>
                    <li><Link to='/'><ShoppingCart size={35}/></Link></li>
                </ul>
            </div>
        </div>
        <nav className="header__nav">
            <Link to="/">BRINCAR</Link>
            <Link to="/">MORDER</Link>
            <Link to="/">COMER</Link>
            <Link to="/">PASSEAR</Link>
            <Link to="/">CASA E CONFORTO</Link>
            <Link to="/">EDUCAÇÃO</Link>
            <Link to="/"><span>OFERTAS</span></Link>
            <Link to="/" className="header__crown"><CrownSimple size={25}/>COLEÇÃO DE OUTONO</Link>
        </nav>
    </div>
  )
}

export default Header