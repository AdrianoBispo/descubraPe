import React from 'react';

import './Login.css';

import Cadastramento from "../../assets/landingPage/LoginCadastro.png";
import Logo from "../../assets/landingPage/Logo.jpg"
import Google from "../../assets/landingPage/Google_Icons.webp"
import { FaFacebook } from "react-icons/fa";

export function Login() {
    return (
        <div className="cadastr-containerL">
            <div className="cadastr-leftL">
                <img src={Cadastramento} className="LoginCadastro"/>
            </div>

            <div className="cadastr-rightL">
                <h1> <img src={Logo} className='Logo'/> DESCUBRA PE</h1>
                <h2>Explore o inesquecível. <br />Descubra Pernambuco.</h2>
                <p className="principLogin">
                    Bem vindo(a) de volta! Por favor, insira seu email ou use outro método para fazer seu Login.
                </p>

                <input type="text" placeholder="Email" className="input-socialEmail" />
                <input type="password" placeholder="Senha" className="input-socialSenha" />
                <button className="btn-conectar">Conecte-se</button>
                <p className='Ou'>
                    Ou
                </p>
                <button className="btn-googleL"> <img src={Google} className="GoogleIconL"/> Entrar com o Google</button>
                <button className="btn-facebookL"> <FaFacebook className="FacebookIconL"/>Entrar com o Facebook</button>

                <p className="conecte">
                    <a href="#">Esqueceu a senha?</a>
                </p>
            </div>
        </div>
    );
}