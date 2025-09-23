'use client';
import React, { useState } from 'react';

interface AddPropertyViewProps {
    onAddProperty: (property: string) => void;
}

const AddPropertyView: React.FC<AddPropertyViewProps> = ({ onAddProperty }) => {
    const [name, setName] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [type, setType] = useState('');

    const propertyTypes = ['Casa', 'Apartamento', 'Sítio', 'Chácara', 'Comercial'];

    const fetchAddressByCep = async (cep: string) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (!data.erro) {
                setStreet(data.logradouro);
                setNeighborhood(data.bairro);
                setCity(data.localidade);
                setState(data.uf);
            } else alert('CEP não encontrado.');
        } catch (error) {
            alert('Erro ao buscar o CEP.');
        }
    };

    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCep = e.target.value.replace(/\D/g, '');
        setCep(newCep);
        if (newCep.length === 8) fetchAddressByCep(newCep);
    };

    const handleSubmit = () => {
        if (!name || !type || !cep || !street || !number) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const fullAddress = `${street}, ${number} - ${neighborhood}, ${city} - ${state}, CEP: ${cep}`;
        onAddProperty(`Imóvel ${name} adicionado com sucesso!`);
        console.log({ name, type, address: fullAddress });

        // Resetar formulário
        setName(''); setCep(''); setStreet(''); setNumber('');
        setNeighborhood(''); setCity(''); setState(''); setType('');
    };

    return (
        <div className="bg-white min-h-screen pt-12 px-4">
            <div className="max-w-4xl w-full mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-[#0c4a6e] leading-tight">Adicionar Novo Imóvel</h2>
                    <p className="mt-2 text-md text-[#2f6687]">Cadastre as informações completas do novo imóvel.</p>
                </div>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome do Imóvel</label>
                            <input 
                                id="name"
                                type="text" 
                                placeholder="Nome do Imóvel" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Nome do Imóvel"
                            />
                        </div>
                        <div>
                            <label htmlFor="cep" className="sr-only">CEP</label>
                            <input 
                                id="cep"
                                type="text" 
                                placeholder="CEP" 
                                value={cep} 
                                onChange={handleCepChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="CEP"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="street" className="sr-only">Rua</label>
                        <input 
                            id="street"
                            type="text" 
                            placeholder="Rua" 
                            value={street} 
                            onChange={(e) => setStreet(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                            aria-label="Rua"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="neighborhood" className="sr-only">Bairro</label>
                            <input 
                                id="neighborhood"
                                type="text" 
                                placeholder="Bairro" 
                                value={neighborhood} 
                                onChange={(e) => setNeighborhood(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Bairro"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="sr-only">Cidade</label>
                            <input 
                                id="city"
                                type="text" 
                                placeholder="Cidade" 
                                value={city} 
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Cidade"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className="sr-only">Estado</label>
                            <input 
                                id="state"
                                type="text" 
                                placeholder="Estado" 
                                value={state} 
                                onChange={(e) => setState(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Estado"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="type" className="sr-only">Tipo de Imóvel</label>
                            <select 
                                id="type"
                                value={type} 
                                onChange={(e) => setType(e.target.value)} 
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Tipo de Imóvel"
                            >
                                <option value="" disabled>Tipo de imóvel</option>
                                {propertyTypes.map((option) => <option key={option} value={option}>{option}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="number" className="sr-only">Número</label>
                            <input 
                                id="number"
                                type="text" 
                                placeholder="Número" 
                                value={number} 
                                onChange={(e) => setNumber(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Número do Imóvel"
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-end pt-4">
                        <button 
                            type="button"
                            onClick={handleSubmit} 
                            className={`px-10 py-3 font-bold text-white rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg
                                bg-[#0c4a6e] hover:bg-[#09415c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c4a6e]'}`}
                        >
                            Adicionar Imóvel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPropertyView;