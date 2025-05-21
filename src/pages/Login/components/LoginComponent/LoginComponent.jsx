import { FaFacebook } from "react-icons/fa";
import { loginWithGoogle } from "../../../../backend/auth/googleLogin";
import { loginWithFacebook } from "../../../../backend/auth/facebookLogin";
import { logo, googleIcon, bannerLogin } from "../../../../assets/index";
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
    <div className="cadastr-containerC">
      <div className="cadastr-leftC">
        <img src={bannerLogin} className="LoginCadastro" />
      </div>

      <div className="cadastr-rightC">
        <h1>
          <img src={logo} className="Logo" /> DESCUBRA PE
        </h1>
        <h2>
          Explore o inesquecível. <br />
          Descubra Pernambuco.
        </h2>
        <p className="princip">
          Entre ou crie sua conta e junte-se a diversas pessoas
          que gostam de usar o Descubra PE
        </p>

        <button className="btn-azulC" onClick={onClick}>
          Conecte-se com seu e-mail & senha
        </button>
        <button className="input-socialC" onClick={handleGoogleLogin}>
          <img src={googleIcon} className="GoogleIcon" /> Entrar com o Google
        </button>
        <button className="btn-facebookC" onClick={handleFacebookLogin}>
          <FaFacebook className="FacebookIconC" /> Entrar com o Facebook
        </button>

        <p className="termos">
          Ao criar uma conta, declaro que li e aceito os{" "}
          <a href="#">Termos de Uso</a> e
          <a href="#"> Política de Privacidade</a> do Descubra PE
        </p>
      </div>
    </div>
  );
}
