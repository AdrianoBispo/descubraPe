import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider } from "../firebase";

export const loginWithFacebook = () => {
  return signInWithPopup(auth, facebookProvider);
};