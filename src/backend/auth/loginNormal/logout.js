// authService.js (opcional, para organizar)
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const logout = async () => {
  await signOut(auth);
};
