'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/LogoNotaGestLogin.png';

export default function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não correspondem.');
      return;
    }

    setLoading(true);
    console.log('Dados do formulário:', formData);
    setTimeout(() => {
      setLoading(false);
      router.push('/login');
    }, 1000);
  };

  const handleGoHome = () => {
    router.push('/');
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
            <h1 className="text-2xl font-semibold text-gray-800">Cadastre-se</h1>
            <p className="text-sm text-gray-500 mt-2">
              Crie sua conta preenchendo os campos abaixo.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4a6e]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4a6e]"
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
              title="A senha deve conter entre 6 a 12 caracteres, pelo menos uma letra maiúscula, um número e sem símbolos."
              value={formData.senha}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4a6e]"
              required
            />
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirme a Senha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4a6e]"
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div className="flex items-center gap-2">
              <input id="aceite-contrato" type="checkbox" className="w-5 h-5" required />
              <label htmlFor="aceite-contrato" className="text-sm text-gray-600">
                Aceito os termos
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white rounded-lg transition
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0c4a6e] hover:bg-[#093955]'}`}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Já tem conta?{' '}
            <Link href="/login" className="text-sky-600 hover:text-sky-700">
              Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
