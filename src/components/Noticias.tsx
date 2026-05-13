// src/components/Noticias.tsx
import React from 'react';
import { noticias } from '../data';

export const Noticias: React.FC = () => {
  // Ordenamos de más nueva a más vieja
  const noticiasOrdenadas = [...noticias].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {noticiasOrdenadas.map((noticia) => (
        <article key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
          <img src={noticia.imagen} alt={noticia.titulo} className="md:w-1/3 object-cover h-48 md:h-auto" />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-sm text-gray-500 font-mono">{noticia.fecha}</span>
              <h2 className="text-2xl font-bold mt-1 mb-3">{noticia.titulo}</h2>
              <p className="text-gray-700">{noticia.contenido}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};