// src/components/BotonesFlotantes.tsx
import React, { useState } from 'react';

export const BotonesFlotantes: React.FC = () => {
  const [mostrarIg, setMostrarIg] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      
      {/* Menú desplegable de Instagram */}
      <div className="relative flex flex-col items-end">
        {mostrarIg && (
          <div className="absolute bottom-16 right-0 bg-white shadow-xl rounded-lg p-3 mb-2 flex flex-col gap-2 w-48 border border-gray-200">
            <a href="https://instagram.com/academia1" target="_blank" className="text-sm font-semibold hover:text-red-600">📸 Academia Central</a>
            <a href="https://instagram.com/academia2" target="_blank" className="text-sm font-semibold hover:text-red-600">📸 Sede Norte</a>
          </div>
        )}
        <button 
          onClick={() => setMostrarIg(!mostrarIg)}
          className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          IG
        </button>
      </div>

      {/* Botón directo de WhatsApp */}
      <a 
        href="https://wa.me/598XXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        WA
      </a>
    </div>
  );
};