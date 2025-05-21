import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { cadastrar } from "../../../../backend/FirebaseServices/auth/loginNormal/cadastro";
import { logar } from "../../../../backend/FirebaseServices/auth/loginNormal/login";

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
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
            {isSignUp
              ? "Fill in your details to create an account."
              : "Enter your email and password to sign in."}
          </Typography>

          {isSignUp && (
            <>
              <Typography className="-mb-2" variant="h6">
                Name
              </Typography>
              <Input
                label="Full Name"
                size="lg"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <Typography className="-mb-2" variant="h6">
                Phone
              </Typography>
              <Input
                label="Phone Number"
                size="lg"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </>
          )}

          <Typography className="-mb-2" variant="h6">
            Email
          </Typography>
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography className="-mb-2" variant="h6">
            Password
          </Typography>
          <Input
            label="Password"
            size="lg"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </CardBody>

        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleSubmit} fullWidth>
            {isSignUp ? "Create Account" : "Sign In"}
          </Button>

          <Typography variant="small" className="mt-4 flex justify-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <Typography
              as="a"
              href="#toggle"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </Dialog>
  );
};
