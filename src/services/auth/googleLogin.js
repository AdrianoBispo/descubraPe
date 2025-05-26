import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};
