'use client';

import React, { useState, useEffect } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import AddFileView from '../../components/AddFileView/AddFileView';
import AddPropertyView from '../../components/AddPropertyView/AddPropertyView';
import Graphics from "../../components/Graphics/Graphics";
import Cards from "../../components/Cards/Cards";
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import Sidebar from '../../components/Sidebar/Sidebar';
import ArquivoNaoEncontrado from '/assets/arquivo_nao_encontrado.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FileData {
  id: number;
  title: string;
  value: number;
  purchaseDate: string;
  category: string;
  subcategory: string;
  property: string;
}

const UploadsPage = () => {
  const router = useRouter();
  const [files, setFiles] = useState<FileData[]>([]);
  const [activeView, setActiveView] = useState<'dashboard' | 'addFile' | 'addProperty' >('dashboard');
  const [showFiles, setShowFiles] = useState(false);

  useEffect(() => {
    setActiveView('dashboard');
    setShowFiles(false);

    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/notas');
        if (!response.ok) throw new Error('Erro ao buscar arquivos');
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        console.error('Erro ao buscar arquivos', error);
      }
    };

    fetchFiles();
  }, []);

  const handleListFiles = async () => {
    try {
      const response = await fetch('/api/notas');
      if (!response.ok) throw new Error('Erro ao buscar arquivos');
      const data = await response.json();
      setFiles(data);
      setShowFiles(true);
    } catch (error) {
      console.error('Erro ao buscar arquivos', error);
    }
  };

  const deleteFile = (id: number) => setFiles(prev => prev.filter(f => f.id !== id));
  const addFile = (file: FileData) => setFiles(prev => [...prev, file]);
  const addProperty = (msg: string) => console.log(msg);

  const generatePDF = () => {
    if (files.length === 0) return alert("Nenhum arquivo para gerar PDF!");
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Relatório de Arquivos', 14, 15);
    autoTable(doc, {
      startY: 25,
      head: [['Título', 'Valor', 'Data da Compra', 'Imóvel', 'Categoria', 'Subcategoria']],
      body: files.map(file => [
        file.title,
        `R$ ${file.value.toFixed(2)}`,
        file.purchaseDate,
        file.property,
        file.category,
        file.subcategory,
      ]),
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: [8, 47, 73], textColor: [255, 255, 255] },
    });
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);
    window.open(url);
  };

  const exportExcel = () => {
    if (files.length === 0) return alert("Nenhum arquivo para exportar!");
    const ws = XLSX.utils.json_to_sheet(files.map(f => ({
      Título: f.title,
      Valor: f.value.toFixed(2),
      'Data da Compra': f.purchaseDate,
      Imóvel: f.property,
      Categoria: f.category,
      Subcategoria: f.subcategory
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Arquivos");
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), "Relatorio_Arquivos.xlsx");
  };

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans', sans-serif] flex flex-col">
      <HeaderAdmin />

      <div className="flex flex-1">
        {/* Sidebar responsiva */}
          <Sidebar
            setActiveView={(view) => {
              setActiveView(view);
              if (view === 'dashboard') setShowFiles(false);
            }}    
            handleListFiles={handleListFiles}
            generatePDF={generatePDF}
            exportExcel={exportExcel}
          />
     

        {/* Conteúdo principal */}
        <main className="flex-1 p-6">
          {activeView === 'dashboard' && (
            <>
              <Cards />
              {showFiles ? (
                files.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center bg-white p-6">
                    <Image src={ArquivoNaoEncontrado} alt="Nenhum arquivo" width={160} height={160} />
                    <h2 className="text-lg font-semibold text-gray-700 mt-4">Nenhum arquivo encontrado</h2>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-zinc-800">
                      <thead>
                        <tr>
                          <th className="border-b p-2">Título</th>
                          <th className="border-b p-2">Valor</th>
                          <th className="border-b p-2">Data da Compra</th>
                          <th className="border-b p-2">Imóvel</th>
                          <th className="border-b p-2">Categoria</th>
                          <th className="border-b p-2">Subcategoria</th>
                          <th className="border-b p-2">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {files.map(file => (
                          <tr key={file.id} className="hover:bg-gray-100">
                            <td className="border-b p-2">{file.title}</td>
                            <td className="border-b p-2">R$ {file.value.toFixed(2)}</td>
                            <td className="border-b p-2">{file.purchaseDate}</td>
                            <td className="border-b p-2">{file.property}</td>
                            <td className="border-b p-2">{file.category}</td>
                            <td className="border-b p-2">{file.subcategory}</td>
                            <td className="border-b p-2">
                              <button onClick={() => deleteFile(file.id)} className="text-red-600 hover:text-red-800">
                                <IoTrashBinSharp size={20} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              ) : (
                <Graphics files={files} />
              )}
            </>
          )}

          {activeView === 'addFile' && <AddFileView onAddFile={addFile} />}
          {activeView === 'addProperty' && <AddPropertyView onAddProperty={addProperty} />}
        </main>
      </div>
    </div>
  );
};

export default UploadsPage;
