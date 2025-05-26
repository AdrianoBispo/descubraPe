import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export async function logar (email, senha) {
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};