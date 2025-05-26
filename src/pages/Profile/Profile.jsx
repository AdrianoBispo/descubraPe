import { useState } from "react";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { ProfileConfig } from "./components/Modais/ProfileConfig/ProfileConfig"
import { Chatbot } from './../../components/Chatbot/Chatbot';

export function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Header />
      <UserProfile onClick={handleOpen} />
      <ProfileConfig open={open} handleOpen={handleOpen}/>
      <Chatbot />
      <Footer />
    </>
  );
}
