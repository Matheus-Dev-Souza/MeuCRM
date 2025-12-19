import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-indigo-900">
          Sell<span className="text-indigo-600">Flux.</span>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 SellFlux Clone. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;