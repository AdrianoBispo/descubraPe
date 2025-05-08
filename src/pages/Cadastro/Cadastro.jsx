import React from 'react';
import './Cadastro.css';
import Cadastramento from "../../assets/landingPage/cadastro.png";

export function Cadastro() {
    return (
        <div className="cadastr-container">
                <div className="cadastr-left">
                <img src={Cadastramento} />
            </div>

            <div className="cadastr-right">
                <h1>DESCUBRA PE</h1>
                <h2>Explore o inesquecível. <br />Descubra Pernambuco.</h2>
                <p className="princip">
                    Crie sua conta gratuita e junte-se a diversas pessoas que gostam de usar o Descubra PE
                </p>

                <button className="btn-azul">Cadastre-se com e-mail & senha</button>
                <button className="input-social">Entrar com o Google</button>
                <button className="btn-facebook">Entrar com o Facebook</button>

                <p className="termos">
                    Ao criar uma conta, declaro que li e aceito os <a href="#">Termos de Uso</a> e
                    <a href="#"> Política de Privacidade</a> do Descubra PE
                </p>
                <p className="conecte">
                    Tem uma conta? <a href="#">Conecte-se</a>
                </p>
            </div>
        </div>
    );
}