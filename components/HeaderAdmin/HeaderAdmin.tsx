'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Logo from '../../assets/LogoHorizontal.png';
import { useNotifications } from '../../context/NotificationContext';

const HeaderAdmin = () => {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const { notifications } = useNotifications(); 
  const handleLogoff = () => {
    console.log('Deslogando...');
    router.push('/');
  };

  const toggleNotifications = () => setShowNotifications(prev => !prev);

  return (
    <header className="bg-sky-900 shadow-lg p-5 flex flex-col md:flex-row justify-between items-center rounded-br-4xl z-40">
      
      {/* Logo */}
      <div className="flex items-center w-full md:w-auto pl-2 md:pl-0">
        <Image
          src={Logo}
          alt="Logo da Empresa"
          width={150}
          height={40}
          className="hidden md:block"
        />

        {/* Botões mobile */}
        <div className="flex md:hidden gap-2 ml-auto">
          <button
            onClick={toggleNotifications}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          >
            <IoNotificationsOutline size={24} className="text-white" />
          </button>

          <button
            onClick={handleLogoff}
            className="px-3 py-1 font-medium text-white border border-gray-300 rounded-lg hover:border-white transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Botões desktop */}
      <div className="hidden md:flex items-center gap-4 mt-2 md:mt-0 pr-10">
        {/* Botão de notificações */}
        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="p-2 border border-transparent rounded-full transition-all duration-300 ease-in-out hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
          >
            <IoNotificationsOutline size={24} className="text-white" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {/* Dropdown de notificações */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10 max-h-64 overflow-y-auto">
              {notifications.length === 0 ? (
                <p className="text-gray-700 text-sm">Nenhuma notificação</p>
              ) : (
                <ul className="space-y-2">
                  {notifications.map((n) => (
                    <li
                      key={n.id}
                      className={`text-sm p-2 rounded-md ${
                        n.type === 'success'
                          ? 'bg-green-100 text-green-700'
                          : n.type === 'error'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {n.message}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Botão Logout */}
        <button
          onClick={handleLogoff}
          className="px-4 py-2 font-medium text-white border border-gray-300 rounded-lg hover:border-white transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default HeaderAdmin;
