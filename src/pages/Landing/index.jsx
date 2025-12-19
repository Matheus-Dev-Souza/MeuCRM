import React from 'react';
import { Calendar, Zap, Mail, RefreshCw, MessageCircle } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FeatureCard from '../../components/ui/FeatureCard';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <main className="flex-grow max-w-6xl mx-auto px-6 pt-16 md:pt-24 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-indigo-100 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span> 
          CRM com IA e Ferramentas de Marketing
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-950 leading-tight mb-6 tracking-tight">
          Construa funis que convertem no <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            piloto automático
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          O SellFlux centraliza marketing, atendimento e vendas com IA para transformar
          conversas em receita, em dias, não meses.
        </p>

        {/* Botões CTA */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-24">
          <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 hover:-translate-y-1">
            <Calendar size={20} />
            Agendar Demonstração
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-indigo-600 border border-indigo-200 px-8 py-4 rounded-xl text-base font-bold hover:bg-indigo-50 transition hover:-translate-y-1">
            <Zap size={20} />
            Iniciar Teste Grátis
          </button>
        </div>

        {/* --- GRID DE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<div className="bg-indigo-100 p-3 rounded-xl text-indigo-600 w-fit"><Zap size={24}/></div>}
            title="Captura"
            desc="Landing pages de alta conversão + Chat + Instagram + WhatsApp."
          />
          <FeatureCard 
            icon={<div className="bg-blue-100 p-3 rounded-xl text-blue-600 w-fit"><Mail size={24}/></div>}
            title="Nutrição"
            desc="Fluxos de e-mail e mensagens automáticas com Inteligência Artificial."
          />
          <FeatureCard 
            icon={<div className="bg-purple-100 p-3 rounded-xl text-purple-600 w-fit"><MessageCircle size={24}/></div>}
            title="Conversão"
            desc="Qualificação automática de leads e CRM integrado para fechar vendas."
          />
          <FeatureCard 
            icon={<div className="bg-orange-100 p-3 rounded-xl text-orange-600 w-fit"><RefreshCw size={24}/></div>}
            title="Retenção"
            desc="Follow-up inteligente e campanhas recorrentes para vender novamente."
          />
        </div>
      </main>

      <Footer />

      {/* FAB WHATSAPP */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 flex items-center justify-center">
          <MessageCircle size={28} fill="white" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;