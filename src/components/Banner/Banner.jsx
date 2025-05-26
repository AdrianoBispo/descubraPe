import { useNavigate } from "react-router-dom";
import { Pins } from "../../assets/index";
import { Bandeira } from "../../assets/index";
import { Seta } from "../../assets/index";
import { mulherBanner } from "../../assets/index";


import "./Banner.css";

export function Banner() {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#002CDF] to-[#56FAFF] p-8 md:p-16 text-white SecaoPrincipal">
      <div className="md:w-1/2 space-y-6 flex flex-col">
        <h1 className="leading-tight">
          Do frevo ao mar <br /> cristalino:<br /> Pernambuco é paixão <br /> à  primeira vista!
        </h1>
        <p className="text-base md:text-lg  ">
          Descubra roteiros incríveis e participe de <br /> experiências únicas.
          Conecte-se com o que <br /> Pernambuco tem de mais autêntico.
        </p>
        <button className="hover:bg-cyan-500 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 Aventure-se" onClick={() => navigate("/login")}>
          AVENTURE-SE <img src={Seta} className="Icon3"/>
        </button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative">
        <div className="rounded-full overflow-hidden shadow-lg Pin">
          <img
            src={mulherBanner}
            alt="Mulher com sombrinha de frevo em Olinda"
            className="object-cover w-full h-full"
          />
        </div>
        <img
          src={Pins}
          alt="Pins"
          className="absolute -bottom-4  Icon1"
        />
        <img
          src={Bandeira}
          alt="Decoração frevo"
          className="absolute -bottom-4  Icon2"
        />
      </div>
    </section>
  );
}