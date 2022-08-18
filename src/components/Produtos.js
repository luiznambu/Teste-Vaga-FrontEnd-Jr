import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { CaretLeft, CaretRight } from "phosphor-react";

function Produtos() {
  
  const [produtos, setProdutos] = useState([]);
  const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json'

  async function getData(){
    const res = await fetch(API_URL);
    const data = await res.json(); 
    const item = data.products

    setProdutos(item);
  }

  useEffect(() => {
    getData();
  }, []);

  const hendleLeftClicks = (e) => {
    e.preventDefault();
  }

  const hendleRightClicks = (e) => {
    e.preventDefault();
  }


  return (
    <div className="produtos container">
        <div className="produtos__nav">
            <h2>Meu cachorro...</h2>
             <nav className="produtos__menu">
                <CaretLeft color='#FBB900'/>
                <button>É AGITADO</button>
                <button>MORDE</button>
                <button>LATE MUITO</button>
                <button>É ANSIOSO</button>
                <button>É ESTRESSADO</button>
                <CaretRight color='#FBB900'/>
             </nav>
        </div>
        <div className="produtos__carousel">
          {produtos.map(produto => {
            const { productName, descriptionShort, photo, price } = produto;
            return (
              <div key={productName} className="produtos__card">
                <div className="produtos__image">
                  <img src={photo} alt="" />
                </div>
                <div className="produtos__texto">
                  <span className="produtos__nome">{productName.toUpperCase()}</span>
                  <del className="produtos__oldPreco">De R${price},69</del>
                  <strong className="produtos__preco"><span>Por</span> R$90,69</strong>
                  <span className="produtos__assPreco yellow">RS85,69</span>
                  <span className="produtos__ass">Para assinantes</span>
                </div>
                <button>ADICIONAR</button>
              </div>
            );
          })};
        </div>
        <div className="produtos__buttons">
          <button className="produtos__leftBtn carousel-btn"><CaretLeft size={30} fontWeight='bold' color='#4D4D4D'/></button>
          <button className="produtos__rightBtn carousel-btn"><CaretRight size={30} fontWeight='bold' color='#4D4D4D'/></button>
        </div>
    </div>
  )
}

export default Produtos