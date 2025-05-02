import React from 'react';
import './Login.css';
import Cadastramento from "../../assets/landingPage/cadastro.png";
import logo from "../../assets/landingPage/Logo.jpg";

export default function Cadastro() {
    return (
        <div className="cadastr-container">
            <div className="cadastr-left">
                <img src={Cadastramento} />
            </div>

            <div className="cadastr-right">
                <h1>DESCUBRA PE</h1>
                <h2>Explore o inesquecível. <br />Descubra Pernambuco.</h2>
                <p className="principLogin">
                    Bem vindo(a) de volta! Por favor, insira seu email ou use outro método para fazer seu Login.
                </p>

                <input type="text" placeholder="Email" className="input-social" />
                <input type="password" placeholder="Senha" className="input-social" />
                <button className="btn-conectar">Conecte-se</button>
                <p className='Ou'>
                    Ou
                </p>
                <button className="input-social">Entrar com o Google</button>
                <button className="btn-facebook">Entrar com o Facebook</button>

                <p className="conecte">
                    <a href="#">Esqueceu a senha?</a>
                </p>
            </div>
        </div>
    );
}