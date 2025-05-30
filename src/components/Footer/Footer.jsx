import { Typography } from "@material-tailwind/react";
import "./Footer.css";
import {logo} from "../../assets/index"

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <>
      <footer className="container__footer w-full bg-white p-8">
        <div className="container__footer-items flex flex-row flex-wrap justify-around">
          <img
            src={logo}
            alt="logo-ct"
            className="w-10"
          />
          <ul className="container__footer-links flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-400 transition-colors hover:text-[#0f30b6] hover:font-bold focus:text-[#0f30b6] focus:font-bold"
              >
                Sobre Nós
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-400 transition-colors hover:text-[#0f30b6] hover:font-bold focus:text-[#0f30b6] focus:font-bold"
              >
                Parcerias
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-400 transition-colors hover:text-[#0f30b6] hover:font-bold focus:text-[#0f30b6] focus:font-bold"
              >
                Contate-nos
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-black w-2/3 place-self-center" />
        <Typography className="text-center font-700">
          &copy; {currentYear} Descubra PE. Todos direitos reservados.
        </Typography>
      </footer>
    </>
  );
}
