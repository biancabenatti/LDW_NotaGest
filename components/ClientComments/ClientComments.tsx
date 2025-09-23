"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import juliano from "../../assets/photo_01.png";
import roberto from "../../assets/photo_2.png";
import mariana from "../../assets/photo_3.png";
import aspas_escura from "../../assets/aspas_escura.png";
import aspas_clara from "../../assets/aspas_clara.png";

const ClientComments: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const comments = [
    {
      image: juliano,
      quoteImage: aspas_escura,
      text: "Com o sistema, consegui organizar toda a documentação da obra de forma prática e rápida. Agora, encontrar comprovantes e notas fiscais é muito mais simples. Foi uma ótima escolha!",
      name: "Juliano Souza",
      role: "Engenheiro Civil",
      bgColor: "bg-[#f0f0f0]",
      textColor: "text-gray-800",
      borderColor: "border-gray-300",
    },
    {
      image: roberto,
      quoteImage: aspas_clara,
      text: "Nunca foi tão fácil gerenciar os documentos das construções que administro. O sistema não só economizou tempo, mas também eliminou o risco de perder arquivos importantes.",
      name: "Roberto Lima",
      role: "Arquiteto",
      bgColor: "bg-[#059669]",
      textColor: "text-white",
      borderColor: "border-white",
    },
    {
      image: mariana,
      quoteImage: aspas_clara,
      text: "Eu costumava perder horas tentando localizar recibos e comprovantes. Esse sistema mudou tudo! Agora, tenho todos os documentos organizados e prontos para a declaração de imposto de renda.",
      name: "Mariana Alves",
      role: "Proprietária de Imóveis",
      bgColor: "bg-[#059669]",
      textColor: "text-white",
      borderColor: "border-white",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          O que nossos clientes dizem
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center">
        {comments.map((comment, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex-1 p-6 rounded-2xl shadow-lg flex flex-col justify-between ${comment.bgColor}`}
          >
            {/* Aspas */}
            <div className="w-10 h-10">
              <Image src={comment.quoteImage} alt="Aspas" className="object-contain" />
            </div>

            {/* Texto */}
            <p className={`mt-4 mb-6 min-h-[160px] ${comment.textColor} text-sm md:text-base leading-relaxed`}>
              {comment.text}
            </p>

            {/* Separador */}
            <hr className={`border ${comment.borderColor} mb-4 w-4/5 mx-auto`} />

            {/* Autor */}
            <div className="flex items-center mt-auto">
              <Image
                src={comment.image}
                alt={comment.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div className="flex flex-col">
                <span className={`font-semibold ${comment.textColor}`}>{comment.name}</span>
                <span className={`text-sm ${comment.textColor} opacity-80`}>{comment.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientComments;
