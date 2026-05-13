// src/components/Contacto.tsx
import React from 'react';
import { sedes } from '../data';

export const Contacto: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-black text-center mb-8 text-gray-800">Nuestras Academias</h2>
      
      {sedes.map((sede) => (
        <div key={sede.id} className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-6 border-l-4 border-red-600">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">{sede.nombre}</h3>
            <p className="text-gray-600 mt-2">{sede.direccion}</p>
          </div>
          <a 
            href={sede.mapaUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-sm"
          >
            📍 Abrir en Google Maps
          </a>
        </div>
      ))}
    </div>
  );
};