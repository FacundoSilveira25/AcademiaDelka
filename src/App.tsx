// src/App.tsx
import { useState } from 'react';
import { Noticias } from './components/Noticias';
import { QuienesSomos } from './components/QuienesSomos';
import { Contacto } from './components/Contacto';
import { BotonesFlotantes } from './components/BotonesFlotantes';
import './App.css';

function App() {
  // Estado para controlar qué pestaña está visible
  const [pestanaActiva, setPestanaActiva] = useState<'noticias' | 'quienes' | 'contacto'>('noticias');

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-24">
      {/* Header y Barra de Navegación */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Logo de la Academia" 
            className="w-50 h-50 object-contain bg-white rounded-full p-1" 
          />
          <h1 className="text-2xl font-black uppercase tracking-wider">
            TAEKWON-DO ITF DEL'KA
          </h1>
          </div>
          <nav className="flex gap-6">
            <button 
              onClick={() => setPestanaActiva('noticias')}
              className={`font-semibold pb-1 border-b-2 transition-all ${pestanaActiva === 'noticias' ? 'border-white' : 'border-transparent text-red-200 hover:text-white'}`}
            >
              Noticias
            </button>
            <button 
              onClick={() => setPestanaActiva('quienes')}
              className={`font-semibold pb-1 border-b-2 transition-all ${pestanaActiva === 'quienes' ? 'border-white' : 'border-transparent text-red-200 hover:text-white'}`}
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => setPestanaActiva('contacto')}
              className={`font-semibold pb-1 border-b-2 transition-all ${pestanaActiva === 'contacto' ? 'border-white' : 'border-transparent text-red-200 hover:text-white'}`}
            >
              Ubicaciones
            </button>
          </nav>
        </div>
      </header>

      {/* Contenedor Dinámico: Aquí se inyecta el componente según la pestaña */}
      <main className="max-w-6xl mx-auto pt-8 px-4">
        {pestanaActiva === 'noticias' && <Noticias />}
        {pestanaActiva === 'quienes' && <QuienesSomos />}
        {pestanaActiva === 'contacto' && <Contacto />}
      </main>

      {/* Componente flotante global */}
      <BotonesFlotantes />
    </div>
  );
}

export default App;