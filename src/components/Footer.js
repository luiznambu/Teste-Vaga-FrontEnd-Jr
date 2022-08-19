import React from 'react'
import {FaFacebookF, FaInstagram, FaYoutube, FaCreditCard } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__social">
            <h2>Nos siga nas nossas redes sociais</h2>
            <div className="footer__icons">
                <i><FaFacebookF size={26}/></i>
                <i><FaInstagram size={30}/></i>
                <i><FaYoutube size={28}/></i>
            </div>
            <h2 className="sobre">Sobre O Cãoselheiro</h2>
            <p>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
        </div>
        <div className="footer__left">
            <div className="footer__info">
                <div className="footer__ass">
                    <h3><a href="/">ASSINATURA</a></h3>
                    <h3 className="parceiros"><a href="/">PARCEIROS</a></h3>
                </div>
                <div className="footer__institucional">
                    <h3><a href="/">INSTITUCIONAL</a></h3>
                    <ul>
                        <li>Quem somos</li>
                        <li>Política de privacidade</li>
                        <li>Política comercial</li>
                        <li>Politica de devolução</li>
                        <li>Regras de frete</li>
                    </ul>
                </div>
                <div className="footer__atendimento">
                    <h3><a href="/">ATENDIMENTO</a></h3>
                    <ul>
                        <li>Fale conosco</li>
                        <li>(11) 9999-9999</li>
                        <li>ocaoselheiro@ocaoselheiro.com.br</li>
                        <li>Trabalhe conosco</li>
                    </ul>
                </div>
            </div>
            <div className="footer__pagamento">
                <div className="footer__bandeiras">
                    <h3>FORMAS DE PAGAMENTO</h3>
                    <div className="footer__cartoes">
                        <div className="footer__card"><FaCreditCard size={75}/></div>
                        <div className="footer__card"><FaCreditCard size={75}/></div>
                        <div className="footer__card"><FaCreditCard size={75}/></div>
                        <div className="footer__card"><FaCreditCard size={75}/></div>
                        <div className="footer__card"><FaCreditCard size={75}/></div>
                        <div className="footer__card"><FaCreditCard size={75}/></div>
                    </div>
                </div>
                <div className="footer__seguranca">
                        <h3>SEGURANÇA</h3>
                    <img src="" alt="let's encrypt" />
                </div>
            </div>
            <div className="footer__direitos">
                <div className="footer__ltda">
                    <span>O Cãoselheiro Comércio LTDA</span>
                    <span>CNPJ: 30.324.633/0001-16</span>
                    <span>© Todos os direitos reservados. 2021</span>
                </div>
                <div className="footer__logo">
                    <img src="" alt="econverse" />
                    <img src="" alt="VTEX" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer