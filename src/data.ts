// src/data.ts

export const noticias = [
  {
    id: 1,
    titulo: "¡Nuevo Torneo Interacademias!",
    fecha: "2026-05-10",
    contenido: "El próximo mes se realizará el torneo de apertura. Preparativos en marcha...",
    imagen: "https://via.placeholder.com/600x300"
  },
  {
    id: 2,
    titulo: "Seminario de Formas",
    fecha: "2026-04-20",
    contenido: "Gran asistencia en nuestro último seminario de perfeccionamiento técnico.",
    imagen: "https://via.placeholder.com/600x300"
  }
];

export const instructores = [
  {
    id: "inst-1",
    nombre: "Javier Del Castillo",
    disciplina: "Taekwon-Do ITF - KickBoxing - Boxeo",
    foto: "/Javier.png",
    bio: "Maestro VII Dan de Taekwon-do ITF, con mas de 30 años dando clases y competencia initerrupida. Incursiono en el mundo de las artes marciales con 14 años",
    logros: ["Campeón Nacional 2022", "Entrenador de la Selección"],
    record: "45-5-0",
    contacto: "carlos@academia.com"
  },
  {
    id: "inst-2",
    nombre: "Facundo Silveira",
    disciplina: "Taekwon-do - Kickboxing - Boxeo",
    foto: "facundo.JPG",
    bio: "Con una sólida trayectoria en las artes marciales y los deportes de contacto, Facundo Silveira es un instructor dedicado a potenciar las habilidades físicas y mentales de sus alumnos. Cuenta con una certificación de alto grado en Taekwon-Do ITF y es especialista en la enseñanza de Kickboxing y Boxeo. Su enfoque de enseñanza combina la disciplina tradicional y la precisión técnica del Taekwon-Do con la efectividad y el acondicionamiento dinámico del Boxeo y el Kickboxing. Además de su labor como docente, Facundo es un competidor activo en la escena del Kickboxing en Uruguay. Esta experiencia de primera mano en el ring le permite transmitir conocimientos reales, probados en combate, y entender a la perfección los procesos físicos y psicológicos por los que pasa un atleta, desde la preparación y el corte de peso hasta la estrategia en la pelea. Ya sea que busques aprender a defenderte, mejorar tu estado físico o prepararte para competir, Facundo te guiará con un entrenamiento estructurado, exigente y adaptado a tus metas.",
    logros: ["Campeona Mundial 2023 lucha por equipo", "Campeon Nacional 2022", "Luchador de KickBoxing Semi-Profesional"],
    record: "1-3",
    contacto: "ana@academia.com"
  }
];

export const sedes = [
  {
    id: 1,
    nombre: "Sede Central",
    direccion: "Av. Principal 1234, Montevideo",
    mapaUrl: "https://maps.google.com/?q=-34.9011,-56.1645" // Coordenadas de ejemplo
  }
];