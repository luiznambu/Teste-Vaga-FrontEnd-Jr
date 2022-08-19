import React from 'react'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'
import blog4 from '../images/blog4.png'
import { CaretLeft, CaretRight } from "phosphor-react";

function Blog() {
  return (
    <div className="blog container">
        <h2>Confira o nosso Blog</h2>
        <div className="blog__vitrine">
            <div className="blog__card glow">
                <div className="blog__img">
                    <img src={blog1} alt="blog1" />
                </div>
                <div className="blog__content">
                    <div className="blog__title">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="blog__text">
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    </div>
                    <button>LER ARTIGO</button>
                </div>
            </div>
            <div className="blog__card glow">
                <div className="blog__img">
                    <img src={blog2} alt="blog2" />
                </div>
                <div className="blog__content">
                    <div className="blog__title">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="blog__text">
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    </div>
                    <button>LER ARTIGO</button>
                </div>
            </div>
            <div className="blog__card glow">
                <div className="blog__img">
                    <img src={blog3} alt="blog3" />
                </div>
                <div className="blog__content">
                    <div className="blog__title">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="blog__text">
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    </div>
                    <button>LER ARTIGO</button>
                </div>
            </div>
            <div className="blog__card glow">
                <div className="blog__img">
                    <img src={blog4} alt="blog4" />
                </div>
                <div className="blog__content">
                    <div className="blog__title">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="blog__text">
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    </div>
                    <button>LER ARTIGO</button>
                </div>
            </div>
            <button className="carousel-btn left-btn"><CaretLeft size={24} color="#4D4D4D"/></button>
            <button className="carousel-btn right-btn"><CaretRight size={24} color="#4D4D4D"/></button>
        </div>   
    </div>
  )
}

export default Blog