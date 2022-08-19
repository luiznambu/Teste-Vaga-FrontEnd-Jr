import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { CaretLeft, CaretRight } from "phosphor-react";
import Modal from './Modal';
import '../styles/sass/_modal.sass'
import { X } from "phosphor-react";

function Produtos() {
  
  const [produtos, setProdutos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json'
  const carousel = useRef(null);


  async function getData(){
    const res = await fetch(API_URL);
    const data = await res.json(); 
    const item = data.products

    setProdutos(item);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleOutsideClick = (e) => {
    if(e.target.id === 'modal') {
      setIsModalOpen(false);
    }
  }

  const handleLeftClick = (e) => {
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <div className="produtos container">
        <div className="produtos__nav">
            <h2>Meu cachorro...</h2>
             <nav className="produtos__menu">
                <CaretLeft color='#FBB900'/>
                <button >É AGITADO</button>
                <button className="white-btn">MORDE</button>
                <button className="white-btn">LATE MUITO</button>
                <button className="white-btn">É ANSIOSO</button>
                <button className="white-btn">É ESTRESSADO</button>
                <CaretRight color='#FBB900'/>
             </nav>
        </div>
        <div className="produtos__carousel" ref={carousel}>
          {produtos.map(produto => {
            const { productName, descriptionShort, photo, price } = produto;
            return (
              <div key={productName} className="produtos__card" onClick={() => setIsModalOpen(true)}>
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
      
      {isModalOpen ? (

        <Modal>

          <div id="modal" className="modal" onClick={handleOutsideClick}>
            <div className="modal__card">
              <div className="modal__left"></div>
              <div className="modal__right">
                <button onClick={() => setIsModalOpen(false)} ><X size={32} color="#000"/></button>
                <h3>Brinquedo Kong Duretreat Ring P</h3>
                <span>R$ 1499,00 </span>
                <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                <a href="/">veja mais detalhes</a>
              </div>

            </div>
          </div>

        </Modal> 
        ) : ( 
        null )}
        

        <div className="produtos__buttons">
          <button className="produtos__leftBtn carousel-btn" onClick={handleLeftClick}>
            <CaretLeft size={30} color='#4D4D4D'/>
            </button>
          <button className="produtos__rightBtn carousel-btn" onClick={handleRightClick}>
            <CaretRight size={30} color='#4D4D4D'/>
            </button>
        </div>
    </div>
  )
}

export default Produtos