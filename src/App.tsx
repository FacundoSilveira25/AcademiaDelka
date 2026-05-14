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
     {/* Header y Barra de Navegación */}
      {/* Header y Barra de Navegación */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-40">
        {/* flex-col en celular (apilado), md:flex-row en PC (misma línea) */}
        <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          
          {/* Contenedor del Logo y Título */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <img 
              src="/logo.png" 
              alt="Logo de la Academia" 
              /* Más pequeño en celular (w-14), tamaño normal en PC (md:w-20) */
              className="w-14 h-14 md:w-20 md:h-20 object-contain bg-white rounded-full p-1 shrink-0" 
            />
            <h1 className="text-lg md:text-2xl font-black uppercase tracking-wider text-center md:text-left leading-tight">
              TAEKWON-DO ITF DEL'KA
            </h1>
          </div>
          
          {/* Navegación: Abajo y centrada en celular, a la derecha en PC */}
          <nav className="flex gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-end overflow-x-auto pt-2 md:pt-0">
            <button 
              onClick={() => setPestanaActiva('noticias')}
              className={`font-semibold pb-1 border-b-2 transition-all whitespace-nowrap ${pestanaActiva === 'noticias' ? 'border-white' : 'border-transparent text-red-200 hover:text-white'}`}
            >
              Noticias
            </button>
            <button 
              onClick={() => setPestanaActiva('quienes')}
              className={`font-semibold pb-1 border-b-2 transition-all whitespace-nowrap ${pestanaActiva === 'quienes' ? 'border-white' : 'border-transparent text-red-200 hover:text-white'}`}
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => setPestanaActiva('contacto')}
              className={`font-semibold pb-1 border-b-2 transition-all whitespace-nowrap ${pestanaActiva === 'contacto' ? 'border-white' : 'border-transparent text-red-200 hover:text-white'}`}
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