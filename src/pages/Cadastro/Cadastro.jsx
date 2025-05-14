import { FaFacebook } from "react-icons/fa";

import { bannerLogin, logo, googleIcon } from "../../assets/index";

import "./Cadastro.css";

export function Cadastro() {
  return (
    <div className="cadastr-containerC">
      <div className="cadastr-leftC">
        <img src={bannerLogin} className="LoginCadastro" />
      </div>

      <div className="cadastr-rightC">
        <h1>
          {" "}
          <img src={logo} className="Logo" /> DESCUBRA PE
        </h1>
        <h2>
          Explore o inesquecível. <br />
          Descubra Pernambuco.
        </h2>
        <p className="princip">
          Crie sua conta gratuita e junte-se a diversas pessoas que gostam de
          usar o Descubra PE
        </p>

        <button className="btn-azulC">Cadastre-se com e-mail & senha</button>
        <button className="input-socialC">
          {" "}
          <img src={googleIcon} className="GoogleIcon" /> Entrar com o Google
        </button>
        <button className="btn-facebookC">
          {" "}
          <FaFacebook className="FacebookIconC" /> Entrar com o Facebook
        </button>

        <p className="termos">
          Ao criar uma conta, declaro que li e aceito os{" "}
          <a href="#">Termos de Uso</a> e
          <a href="#"> Política de Privacidade</a> do Descubra PE
        </p>
        <p className="conecte">
          Tem uma conta? <a href="#">Conecte-se</a>
        </p>
      </div>
    </div>
  );
}
