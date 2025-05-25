import { loginWithGoogle } from "../../../../backend/auth/googleLogin";
import { loginWithFacebook } from "../../../../backend/auth/facebookLogin";
import {
  logo,
  googleIcon,
  facebookIcon,
  bannerLogin,
} from "../../../../assets/index";
import { useNavigate } from "react-router-dom";

import "./LoginComponent.css";

export function LoginComponent({ onClick }) {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("Logado com Google:", user);
      navigate("/"); // redireciona para a tela principal
    } catch (error) {
      console.error("Erro no login com Google:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const user = await loginWithFacebook();
      console.log("Logado com Facebook:", user);
      navigate("/");
    } catch (error) {
      console.error("Erro no login com Facebook:", error);
    }
  };

  return (
    <div className="container_login">
      <img className="container_login-img" src={bannerLogin} alt="Banner convidando o usuário a criar sua conta na Descubra PE" />

      <div className="container_login_form">
        <h1 className="container_login_form-titulo">
          <img src={logo} alt="Logo Descubra PE"/> DESCUBRA PE
        </h1>
        <h2 className="container_login_form-subtitulo">
          Explore o inesquecível, <br />
          Descubra Pernambuco.
        </h2>
        <p className="container_login_form-paragrafo">
          Entre ou crie sua conta e junte-se a diversas
          pessoas que gostam de usar o Descubra PE
        </p>

        <button className="btn-conecte" onClick={onClick}>
          Conecte-se com e-mail & senha
        </button>
        <button className="btn-google" onClick={handleGoogleLogin}>
          <img src={googleIcon} alt="Ícone do Google" />
          <p>Entrar com o Google</p>
        </button>
        <button className="btn-facebook" onClick={handleFacebookLogin}>
          <img src={facebookIcon} alt="Ícone do Facebook" />
          <p>Entrar com o Facebook</p>
        </button>

        <p className="termos">
          Ao criar uma conta, declaro que li e aceito os
          <a href="#"> Termos de Uso</a> e
          <a href="#"> Política de Privacidade</a> do Descubra PE.
        </p>
      </div>
    </div>
  );
}
