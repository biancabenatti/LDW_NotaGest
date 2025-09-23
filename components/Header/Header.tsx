"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/LogoHorizontal.png";

const HeaderHero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => setSticky(window.scrollY > 80);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${sticky ? "bg-[#0c4a6e] shadow-lg" : "bg-transparent shadow-none"
          }`}
      >
        <div className="flex items-center justify-between h-24 px-4 sm:px-6 md:px-0 mx-auto max-w-6xl">
          <Image src={Logo} alt="Logo" className="w-auto h-10 md:h-12" priority />

          {/* Menu Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8 lg:gap-10 text-white">
              {[
                { label: "Home", to: "home" },
                { label: "Dicas", to: "tips" },
                { label: "Como Funciona", to: "how-it-work-section" },
                { label: "Sobre Nós", to: "about-us-section" },
                { label: "FAQ", to: "faq-section" },
              ].map((item) => (
                <li key={item.to} className="cursor-pointer hover:text-[#fde047] transition">
                  <ScrollLink to={item.to} smooth duration={500}>
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="border border-[#25aff0] text-white py-2 px-4 ml-4 rounded-md font-semibold hover:bg-[#25aff0]/10 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="bg-[#25aff0] text-black py-2 px-4 rounded-md font-semibold hover:opacity-80 transition"
                >
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botão Mobile */}
          <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-[#0c4a6e] px-4 sm:px-6 pb-6 shadow-lg animate-slide-down">
            <ul className="flex flex-col gap-4 text-white">
              {[
                { label: "Home", to: "home" },
                { label: "Dicas", to: "tips" },
                { label: "Como Funciona", to: "how-it-work-section" },
                { label: "Sobre Nós", to: "about-us-section" },
                { label: "FAQ", to: "faq-section" },
              ].map((item) => (
                <li key={item.to} className="cursor-pointer hover:text-[#fde047] transition">
                  <ScrollLink to={item.to} smooth duration={500} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="block text-center bg-[#fde047] text-black py-2 px-4 rounded-md hover:opacity-80"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="block text-center bg-[#25aff0] text-black py-2 px-4 rounded-md hover:opacity-80"
                  onClick={() => setIsOpen(false)}
                >
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 relative overflow-hidden">
        {/* Gradiente do fundo */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0c4a6e] to-[#022c3c]"></div>

        {/* Grid de fundo */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/hero/grid-01.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.3,
          }}
        ></div>

        {/* Conteúdo do Hero */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative z-10">
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white space-y-3 md:mt-0 ml-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight">
              Gerencie seus <span className="text-[#25aff0]">Cupons Fiscais</span> de Forma <span className="text-[#25aff0]">Rápida</span> e <span className="text-[#25aff0]">Segura</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-200 mt-5 mb-5">
              A maneira mais prática e profissional de controlar seus documentos fiscais.
            </p>

            {/* Botão principal */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <Link href="/register" className="w-full sm:w-auto bg-[#25aff0] text-black py-3 px-6 rounded-md font-semibold hover:opacity-80 transition">
                Experimente grátis
              </Link>
            </div>

            {/* Botões de app */}
            <div className="flex flex-row gap-4 mt-6 justify-center md:justify-start flex-wrap">
              <div className="relative w-[140px] sm:w-[220px] h-12 sm:h-16">
                <Image src="/hero/playstore.png" alt="Download Play Store" fill className="object-contain cursor-pointer" />
              </div>
              <div className="relative w-[140px] sm:w-[220px] h-12 sm:h-16">
                <Image src="/hero/applestore.png" alt="Download App Store" fill className="object-contain cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="hidden md:flex md:w-1/2 relative mt-10 md:mt-0 justify-center items-center">
            <div className="relative w-full max-w-[85rem] aspect-square">
              {/* Blur de fundo */}
              <div className="absolute w-[80rem] h-[80rem] sm:w-[70rem] sm:h-[70rem] bg-white/10 rounded-full filter blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

              {/* Imagem */}
              <Image
                src={require("../../assets/Img_Home.png")}
                alt="Imagem Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderHero;
