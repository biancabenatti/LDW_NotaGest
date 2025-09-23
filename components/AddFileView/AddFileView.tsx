import axios from 'axios';
import { IoMdCloudUpload } from "react-icons/io";
import React, { useState } from 'react';

export interface FileData {
    id: number;
    name: string;
    title: string;
    value: number;
    purchaseDate: string;
    observation?: string;
    category: string;
    subcategory: string;
    property: string;
    date?: string;
    size?: string;
    url?: string; 
}

interface AddFileViewProps {
    onAddFile: (file: FileData) => void;
}

const AddFileView: React.FC<AddFileViewProps> = ({ onAddFile }) => {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [observation, setObservation] = useState('');
    const [category, setCategory] = useState('Construção');
    const [subcategory, setSubcategory] = useState('Iluminação');
    const [property, setProperty] = useState('');
    const [uploading, setUploading] = useState(false);

    const subcategories = ['Iluminação','Ferragem','Hidráulica','Acabamento','Pintura','Madeiramento','Outros'];
    const exampleProperties = ['Casa Jardim América','Obra Centro','Sítio São João'];

    const handleSubmit = async () => {
        if (!file || !property) {
            alert('Selecione um arquivo e um imóvel');
            return;
        }

        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('/api/upload', formData);
            const fileUrl = response.data.url;

            const newFile: FileData = {
                id: Date.now(),
                name: file.name,
                title,
                value: parseFloat(value),
                purchaseDate,
                observation,
                category,
                subcategory,
                property,
                date: new Date().toLocaleDateString(),
                size: `${(file.size / 1024).toFixed(2)} KB`,
                url: fileUrl,
            };

            onAddFile(newFile);

            setFile(null);
            setTitle('');
            setValue('');
            setPurchaseDate('');
            setObservation('');
            setProperty('');
            setCategory('Construção');
            setSubcategory('Iluminação');

            alert('Nota fiscal salva com sucesso!');

        } catch (error) {
            console.error('Erro ao enviar arquivo', error);
            alert('Erro ao enviar arquivo');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen pt-12 px-4">
            <div className="max-w-4xl w-full mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-[#0c4a6e] leading-tight">Registrar Nova Nota Fiscal</h2>
                    <p className="mt-2 text-md text-[#2f6687]">Preencha os dados e anexe o comprovante.</p>
                </div>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                             <label htmlFor="title" className="sr-only">Título</label>
                            <input 
                                id="title"
                                type="text" 
                                placeholder="Título da Nota" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Título da Nota Fiscal"
                            />
                        </div>
                       
                        <div className="col-span-1">
                            <label htmlFor="value" className="sr-only">Valor da Nota</label>
                            <input 
                                id="value"
                                type="number" 
                                placeholder="Valor (R$)" 
                                value={value} 
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Valor da Nota Fiscal"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="purchaseDate" className="sr-only">Data da Compra</label>
                            <input 
                                id="purchaseDate"
                                type="date" 
                                placeholder="Data da Compra" 
                                value={purchaseDate} 
                                onChange={(e) => setPurchaseDate(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Data da Compra"
                            />
                        </div>
                         <div className="col-span-1">
                            <label htmlFor="property" className="sr-only">Selecione um imóvel</label>
                            <select 
                                id="property"
                                value={property} 
                                onChange={(e) => setProperty(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Selecione o Imóvel"
                            >
                                <option value="" disabled>Selecione um imóvel</option>
                                {exampleProperties.map((item) => <option key={item} value={item}>{item}</option>)}
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="observation" className="sr-only">Descrição</label>
                        <textarea 
                            id="observation"
                            placeholder="Observações ou Descrição Detalhada" 
                            value={observation} 
                            onChange={(e) => setObservation(e.target.value)}
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200 resize-none"
                            aria-label="Observações ou Descrição Detalhada"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                             <label htmlFor="category" className="sr-only">Categoria</label>
                            <select 
                                id="category"
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Categoria da Nota Fiscal"
                            >
                                <option value="Construção">Construção</option>
                                <option value="Reforma">Reforma</option>
                            </select>
                        </div>
                        <div>
                             <label htmlFor="subcategory" className="sr-only">Subcategoria</label>
                            <select 
                                id="subcategory"
                                value={subcategory} 
                                onChange={(e) => setSubcategory(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 focus:ring-[#0c4a6e] focus:border-[#0c4a6e] transition duration-200"
                                aria-label="Subcategoria da Nota Fiscal"
                            >
                                {subcategories.map((item) => <option key={item}>{item}</option>)}
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label className="group relative w-full flex items-center justify-center bg-[#0c4a6e] hover:bg-[#09415c] text-white font-semibold px-6 py-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                                <IoMdCloudUpload size={24} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                            </span>
                            <span className="ml-8">{file ? file.name : 'Anexar Comprovante'}</span>
                            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="hidden" />
                        </label>
                    </div>
                    
                    <div className="flex justify-end pt-4">
                        <button 
                            type="button"
                            onClick={handleSubmit} 
                            disabled={uploading}
                            className={`px-10 py-3 font-bold text-white rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg
                                ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0c4a6e] hover:bg-[#09415c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c4a6e]'}`}
                        >
                            {uploading ? 'Enviando...' : 'Salvar Nota Fiscal'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFileView;