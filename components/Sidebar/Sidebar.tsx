'use client';
import React, { useState } from 'react';
import {
    IoFolderOpenOutline,
    IoHomeOutline,
    IoStatsChartOutline,
    IoCalendarOutline,
    IoCardOutline,
    IoChevronForward,
    IoMenu
} from 'react-icons/io5';

interface SidebarProps {
    setActiveView: React.Dispatch<React.SetStateAction<'dashboard' | 'addFile' | 'addProperty'>>;
    handleListFiles: () => void;
    generatePDF: () => void;
    exportExcel: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveView, handleListFiles, generatePDF, exportExcel }) => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false); // controla sidebar mobile

    const toggleSection = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    const handleClickButton = (action: () => void) => {
        action();
        setIsOpen(false); // fecha sidebar no mobile ao clicar
    };

    const buttonClass = "flex items-center justify-between w-full p-2 hover:bg-[#0b3a56] rounded transition";

    return (
        <>
            {/* Botão hamburguer - só mobile */}
            <button
                className="p-1 m-1 text-gray-200 md:hidden bg-[#0c4a6e] rounded-md shadow-md fixed top-4 left-4 z-[60]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoMenu size={28} />
            </button>

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 h-full w-64 bg-[#0c4a6e] p-4 text-gray-200 
          transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:h-auto md:top-auto md:left-auto md:z-auto
        `}
            >
                {/* Gestão de Arquivos */}
                <div className="mt-18 md:mt-0">
                    <button onClick={() => toggleSection('arquivos')} className={buttonClass}>
                        <div className="flex items-center">
                            <IoFolderOpenOutline size={20} className="mr-2" />
                            Gestão de Arquivos
                        </div>
                        <IoChevronForward
                            size={18}
                            className={`transition-transform duration-200 ${openSection === 'arquivos' ? 'rotate-90' : ''}`}
                        />
                    </button>
                    {openSection === 'arquivos' && (
                        <div className="ml-6 flex flex-col mt-2 gap-2 w-full">
                            <button
                                onClick={() => handleClickButton(() => { handleListFiles(); setActiveView('dashboard'); })}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Listar arquivos
                            </button>
                            <button
                                onClick={() => handleClickButton(() => setActiveView('addFile'))}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Adicionar nota
                            </button>
                        </div>
                    )}
                </div>

                {/* Gestão de Imóveis */}
                <div className="mt-2">
                    <button onClick={() => toggleSection('imoveis')} className={buttonClass}>
                        <div className="flex items-center">
                            <IoHomeOutline size={20} className="mr-2" />
                            Gestão de Imóveis
                        </div>
                        <IoChevronForward
                            size={18}
                            className={`transition-transform duration-200 ${openSection === 'imoveis' ? 'rotate-90' : ''}`}
                        />
                    </button>
                    {openSection === 'imoveis' && (
                        <div className="ml-6 flex flex-col mt-2 gap-2 w-full">
                            <button
                                onClick={() => handleClickButton(() => setActiveView('addProperty'))}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Adicionar imóvel
                            </button>
                        </div>
                    )}
                </div>

                {/* Relatórios */}
                <div className="mt-2">
                    <button onClick={() => toggleSection('relatorios')} className={buttonClass}>
                        <div className="flex items-center">
                            <IoStatsChartOutline size={20} className="mr-2" />
                            Relatórios
                        </div>
                        <IoChevronForward
                            size={18}
                            className={`transition-transform duration-200 ${openSection === 'relatorios' ? 'rotate-90' : ''}`}
                        />
                    </button>
                    {openSection === 'relatorios' && (
                        <div className="ml-6 flex flex-col mt-2 gap-2 w-full">
                            <button
                                onClick={() => handleClickButton(() => setActiveView('dashboard'))}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => handleClickButton(generatePDF)}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Exportar PDF
                            </button>
                            <button
                                onClick={() => handleClickButton(exportExcel)}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Exportar Excel
                            </button>
                        </div>
                    )}
                </div>

                {/* Agendamentos */}
                <div className="mt-2">
                    <button onClick={() => toggleSection('agendamentos')} className={buttonClass}>
                        <div className="flex items-center">
                            <IoCalendarOutline size={20} className="mr-2" />
                            Agendamentos
                        </div>
                        <IoChevronForward
                            size={18}
                            className={`transition-transform duration-200 ${openSection === 'agendamentos' ? 'rotate-90' : ''}`}
                        />
                    </button>
                    {openSection === 'agendamentos' && (
                        <div className="ml-6 flex flex-col mt-2 gap-2 w-full">
                            <button
                                onClick={() => handleClickButton(() => alert("Abrir calendário"))}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Calendário
                            </button>
                        </div>
                    )}
                </div>

                {/* Pagamentos */}
                <div className="mt-2">
                    <button onClick={() => toggleSection('pagamentos')} className={buttonClass}>
                        <div className="flex items-center">
                            <IoCardOutline size={20} className="mr-2" />
                            Pagamentos
                        </div>
                        <IoChevronForward
                            size={18}
                            className={`transition-transform duration-200 ${openSection === 'pagamentos' ? 'rotate-90' : ''}`}
                        />
                    </button>
                    {openSection === 'pagamentos' && (
                        <div className="ml-6 flex flex-col mt-2 gap-2 w-full">
                            <button
                                onClick={() => handleClickButton(() => alert("API de pagamento"))}
                                className="text-left hover:text-white pl-4 w-full"
                            >
                                Integração com API de Pagamento
                            </button>
                        </div>
                    )}
                </div>
            </aside>

            {/* Sombra atrás da sidebar - só mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
