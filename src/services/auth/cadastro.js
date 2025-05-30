import { createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export async function cadastrar(email, senha, nome, telefone) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    senha
  );
  const user = userCredential.user;

  // Atualiza o perfil do Firebase Auth (nome)
  await updateProfile(user, { displayName: nome });

  // Salva informações no Firestore
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    nome: nome,
    email: user.email,
    photoURL: user.photoURL, // Será null inicialmente
    telefone: telefone,
    resumo: "",
    dataCriacao: serverTimestamp(),
  });

  return userCredential;
}
