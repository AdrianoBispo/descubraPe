import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export async function cadastrar (email, senha, nome, telefone) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  const user = userCredential.user;

  // Salvar dados adicionais no Firestore
  await setDoc(doc(db, "usuarios", user.uid), {
    uid: user.uid,
    email,
    nome,
    telefone
  });

  return userCredential;
};
