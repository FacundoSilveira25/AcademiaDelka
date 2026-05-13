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
    nombre: "Carlos Martínez",
    disciplina: "Taekwon-Do ITF",
    foto: "https://via.placeholder.com/150",
    bio: "Instructor Mayor con más de 15 años de experiencia formando competidores.",
    logros: ["Campeón Nacional 2022", "Entrenador de la Selección"],
    record: "45-5-0",
    contacto: "carlos@academia.com"
  },
  {
    id: "inst-2",
    nombre: "Ana Gómez",
    disciplina: "Kickboxing & Boxeo",
    foto: "https://via.placeholder.com/150",
    bio: "Especialista en striking y preparación física para deportes de combate.",
    logros: ["Campeona Sudamericana", "Técnica Profesional"],
    record: "22-3-1",
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