import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold text-indigo-900 flex items-center gap-1 cursor-pointer">
            Index<span className="text-indigo-600">CRM.</span>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
              Recursos <ChevronDown size={14}/>
            </a>
            <a href="#" className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
              Soluções <ChevronDown size={14}/>
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Preços</a>
          </div>
        </div>

        {/* Botões Direita */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-indigo-600 px-3 py-2">
            Login
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            Começar Agora
          </button>
          {/* Menu Mobile Icon */}
          <button className="md:hidden text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;