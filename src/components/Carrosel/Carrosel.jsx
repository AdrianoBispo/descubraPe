import React from 'react';
import "./Carrosel.css";
import Pin from '../../assets/landingPage/Pin.png';

export function Carrosel() {
    return (
        <div className="min-h-screen SecaoPrincipal">
            <section className="flex flex-1 flex-col items-left justify-center text-left p-8">
                <h1 className="ml-4 mt-14 text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight mb-6">
                    Do frevo ao mar cristalino: Pernambuco é paixão à primeira vista!
                </h1>
                <p className="ml-4 mt-14 text-white text-lg mb-8 max-w-xl">
                    Descubra roteiros incríveis e participe de experiências únicas. Conecte-se com o que Pernambuco tem de mais autêntico.
                </p>
            </section>
            <button className="Aventure-se">Aventure-se</button>
                <div className='Pin'>
                    <img src={Pin}/>
                </div>
        </div>
    );
};