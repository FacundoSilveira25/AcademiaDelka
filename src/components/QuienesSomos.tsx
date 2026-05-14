import { instructores } from '../data';

export const QuienesSomos = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      
      {/* Barra Horizontal de Instructores */}
      <nav className="flex flex-row gap-6 overflow-x-auto pb-4 justify-start md:justify-center items-center w-full">
        {instructores.map((inst) => (
          <a 
            href={`#${inst.id}`} 
            key={inst.id} 
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform min-w-[120px] p-2"
          >
            <img 
              src={inst.foto} 
              alt={inst.nombre} 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-red-600 shadow-md"
            />
            <span className="font-bold text-gray-800 text-center text-sm md:text-base">
              {inst.nombre}
            </span>
          </a>
        ))}
      </nav>

      {/* Contenido principal con la info de los instructores */}
      <main className="space-y-12 max-w-4xl mx-auto w-full scroll-smooth">
        {instructores.map((inst) => (
          <section id={inst.id} key={inst.id} className="bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-black text-gray-900 mb-2">{inst.nombre}</h2>
            <h3 className="text-xl text-red-600 font-semibold mb-4">{inst.disciplina}</h3>
            <p className="text-gray-700 mb-6">{inst.bio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div>
                <h4 className="font-bold text-gray-800 border-b-2 border-red-200 pb-2 mb-3">Logros Destacados</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {inst.logros.map((logro, index) => <li key={index}>{logro}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 border-b-2 border-red-200 pb-2 mb-3">Datos Técnicos</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Récord:</strong> <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-mono text-sm">{inst.record}</span></p>
                  <p><strong>Contacto:</strong> {inst.contacto}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};