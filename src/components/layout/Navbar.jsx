import React from 'react';
import { ChevronDown, Globe, Rocket, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-12">
          <div className="text-3xl font-bold text-indigo-950 flex items-center cursor-pointer">
            Sell<span className="text-indigo-600">Flux.</span>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <button className="hover:text-indigo-600 flex items-center gap-1 transition-colors outline-none">
              Recursos <ChevronDown size={14}/>
            </button>
            <button className="hover:text-indigo-600 flex items-center gap-1 transition-colors outline-none">
              Soluções <ChevronDown size={14}/>
            </button>
            <a href="#" className="hover:text-indigo-600 transition-colors">Preços</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contato</a>
          </div>
        </div>

        {/* Botões Direita */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600 cursor-pointer hover:text-indigo-600">
            <Globe size={18} />
            <span>PT (BR)</span>
            <ChevronDown size={14} />
          </div>
          
          <button className="hidden md:block text-sm font-bold text-indigo-900 hover:text-indigo-600">
            Login
          </button>
          
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 flex items-center gap-2">
            <Rocket size={16} />
            Começar Agora
          </button>

          {/* Menu Mobile */}
          <button className="md:hidden text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;