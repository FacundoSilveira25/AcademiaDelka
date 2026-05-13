
// src/components/QuienesSomos.tsx
import React from 'react';
import { instructores } from '../data';

export const QuienesSomos: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Barra lateral de navegación con fotos */}
      <aside className="md:w-1/4 flex md:flex-col gap-4 overflow-x-auto md:sticky md:top-4 h-max">
        {instructores.map((inst) => (
          <a href={`#${inst.id}`} key={inst.id} className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <img 
              src={inst.foto} 
              alt={inst.nombre} 
              className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
            />
            <span className="hidden md:block font-bold text-gray-800">{inst.nombre}</span>
          </a>
        ))}
      </aside>

      {/* Contenido principal con la info de los instructores */}
      <main className="md:w-3/4 space-y-12 scroll-smooth">
        {instructores.map((inst) => (
          <section id={inst.id} key={inst.id} className="bg-white p-6 rounded-xl shadow-md pt-20">
            <h2 className="text-3xl font-black text-gray-900 mb-2">{inst.nombre}</h2>
            <h3 className="text-xl text-red-600 font-semibold mb-4">{inst.disciplina}</h3>
            <p className="text-gray-700 mb-4">{inst.bio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold border-b pb-1">Logros Destacados</h4>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {inst.logros.map((logro, index) => <li key={index}>{logro}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold border-b pb-1">Datos Técnicos</h4>
                <p className="mt-2 text-gray-600"><strong>Récord:</strong> {inst.record}</p>
                <p className="text-gray-600"><strong>Contacto:</strong> {inst.contacto}</p>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};