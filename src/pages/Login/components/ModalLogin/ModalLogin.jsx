import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { cadastrar } from "../../../../backend/auth/loginNormal/cadastro";
import { logar } from "../../../../backend/auth/loginNormal/login";

import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export function ModalLogin ({ open, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        const userCredential = await cadastrar(email, senha, nome, telefone);
        console.log("Usuário registrado:", userCredential.user);
      } else {
        const userCredential = await logar(email, senha);
        console.log("Usuário logado:", userCredential.user);
      }

      navigate("/");
      onClose();
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  useEffect(() => {
    if (!open) {
      setEmail("");
      setSenha("");
      setNome("");
      setTelefone("");
      setIsSignUp(false);
    }
  }, [open]);

  return (
    <Dialog size="xs" open={open} handler={onClose} className="bg-transparent shadow-none">
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="blue-gray">
            {isSignUp ? "Cadastre-se" : "Já tem uma conta?"}
          </Typography>
          <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
            {isSignUp
              ? "Preencha os campos abaixo e crie sua conta."
              : "Faça seu login digitando seu e-mail e senha."}
          </Typography>

          {isSignUp && (
            <>
              <Input
                label="Nome e Sobrenome"
                size="lg"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <Input
                label="Telefone"
                size="lg"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </>
          )}

          <Input
            label="E-mail"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            size="lg"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </CardBody>

        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleSubmit} fullWidth>
            {isSignUp ? "Criar conta" : "Entrar"}
          </Button>

          <Typography variant="small" className="mt-4 flex justify-center">
            {isSignUp ? "Já tem uma conta?" : "Ainda não tem uma conta?"}
            <Typography
              as="a"
              href="#toggle"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Entrar" : "Cadastre-se"}
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </Dialog>
  );
};
