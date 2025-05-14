import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { UserProfile } from "./components/UserProfile/UserProfile";

import "./Profile.css";

export function Profilee() {
  return (
    <>
      <Header />
      <UserProfile />
      <Footer />
    </>
  );
}
