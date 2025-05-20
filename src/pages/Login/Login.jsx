import { useState } from "react";
import { LoginComponent } from "./components/LoginComponent/LoginComponent";
import { ModalLogin } from "./components/ModalLogin/ModalLogin"

export function Login () {
  const [openDialog, setOpenDialog] = useState(false);

  const handleToggleDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  return (
    <>
      <LoginComponent onClick={handleToggleDialog} />
      <ModalLogin open={openDialog} onClose={handleToggleDialog}/>
    </>
  );
}