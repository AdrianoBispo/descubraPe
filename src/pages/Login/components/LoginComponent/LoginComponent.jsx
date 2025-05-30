import {
  auth,
  googleProvider,
  facebookProvider,
  db,
} from "../../../../services/firebase";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import {
  logo,
  googleIcon,
  facebookIcon,
  bannerLogin,
} from "../../../../assets/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./LoginComponent.css";

export function LoginComponent({ onClick }) {
  const navigate = useNavigate();

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const handleUserLogin = async (user) => {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(
        userDocRef,
        {
          uid: user.uid,
          nome: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          telefone: "",
          resumo: "",
          dataCriacao: serverTimestamp(),
        },
        { merge: true }
      );
    }
    navigate("/");
  };

  const handleGoogleLogin = async () => {
    try {
      if (isMobileDevice()) {
        await signInWithRedirect(auth, googleProvider);
      } else {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        await handleUserLogin(user);
      }
    } catch (err) {
      console.error("Erro no login com Google:", err);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      if (isMobileDevice()) {
        await signInWithRedirect(auth, facebookProvider);
      } else {
        const result = await signInWithPopup(auth, facebookProvider);
        const user = result.user;
        await handleUserLogin(user);
      }
    } catch (err) {
      console.error("Erro no login com Facebook:", err);
    }
  };

  // Processa resultado de redirect (quando for login em celular)
  useEffect(() => {
    const processRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          const user = result.user;
          await handleUserLogin(user);
        }
      } catch (err) {
        console.error("Erro ao processar login com redirect:", err);
      }
    };
    processRedirectResult();
  }, []);

  return (
    <div className="container_login">
      <img
        className="container_login-img"
        src={bannerLogin}
        alt="Banner convidando o usuário a criar sua conta na Descubra PE"
      />

      <div className="container_login_form">
        <h1 className="container_login_form-titulo">
          <img src={logo} alt="Logo Descubra PE" /> DESCUBRA PE
        </h1>
        <h2 className="container_login_form-subtitulo">
          Explore o inesquecível, <br />
          Descubra Pernambuco.
        </h2>
        <p className="container_login_form-paragrafo">
          Entre ou crie sua conta e junte-se a diversas pessoas que gostam de
          usar o Descubra PE
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
