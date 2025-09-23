'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/LogoNotaGestLogin.png";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

type Credentials = {
  email: string;
  senha: string;
};

export default function Login() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    senha: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (credentials.email && credentials.senha) {
      console.log("Credenciais:", credentials);
      setTimeout(() => { // simulação de delay
        setLoading(false);
        router.push("/uploads");
      }, 1000);
    } else {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Coluna esquerda */}
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

      {/* Coluna direita */}
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
              Login
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Entre com seu e-mail e senha para acessar sua conta.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={credentials.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4a6e]"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="senha"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Senha <span className="text-red-500">*</span>
              </label>
              <input
                id="senha"
                name="senha"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={credentials.senha}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4a6e]"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <MdOutlineVisibility className="w-5 h-5" /> : <MdOutlineVisibilityOff className="w-5 h-5 mt-6" />}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-sky-600 border-gray-300 rounded" />
                Manter-me conectado
              </label>
              <Link href="/forgot-password" className="underline text-sky-600 hover:text-sky-700">
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#0c4a6e] hover:bg-[#093955]"}`}
            >
              {loading ? "Entrando..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Não tem conta?{" "}
            <Link href="/register" className="text-sky-600 hover:text-sky-700">
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
