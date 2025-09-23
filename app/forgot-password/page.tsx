'use client';
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Logo from "../../assets/LogoNotaGestLogin.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_email: email,
      subject: "Recuperação de senha - NotaGest",
      message: `Olá! Você solicitou a redefinição da sua senha. Clique no link para redefinir: http://localhost:3000/reset-password`,
    };

    try {
      await emailjs.send(
        "service_id_aqui",   //Service ID
        "template_id_aqui", //Template ID
        templateParams,
        "public_key_aqui"    //Public Key
      );

      alert("✅ E-mail de recuperação enviado com sucesso!");
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("❌ Erro ao enviar e-mail. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Coluna esquerda - Logo */}
      <div className="relative flex flex-col items-center justify-center bg-[#0c4a6e] overflow-hidden">
        <img
          src="/images/shape/grid-01.svg"
          alt="grid"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 brightness-125"
        />
        <div className="relative z-10 text-center px-6">
          <Image
            src={Logo}
            alt="Logo NotaGest"
            width={400}
            height={100}
            className="mx-auto mb-4"
          />
        </div>
      </div>

      {/* Coluna direita - Formulário */}
      <div className="flex flex-col justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md mx-auto">
          {/* Voltar para Home */}
          <div className="mb-6">
            <button
              onClick={handleGoHome}
              className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700"
            >
              &#8592; Voltar para Home
            </button>
          </div>

          {/* Título */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Esqueceu sua senha?
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Digite seu e-mail e enviaremos um link para redefinir sua senha.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-[#0c4a6e] focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#0c4a6e] hover:bg-[#093955]"}`}
            >
              {loading ? "Enviando..." : "Enviar link de recuperação"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-sm text-sky-600 hover:text-sky-700"
            >
              Voltar para Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
