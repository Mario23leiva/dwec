const fs = require('fs');
const path = require('path');

// Función para obtener la lista de directorios y subdirectorios
function obtenerDirectoriosRecursivamente(ruta) {
  const archivos = fs.readdirSync(ruta);
  const directorios = [];

  archivos.forEach((archivo) => {
    const archivoRuta = path.join(ruta, archivo);
    const stats = fs.statSync(archivoRuta);

    if (stats.isDirectory()) {
      // Si es un directorio, lo agregamos a la lista
      directorios.push(archivoRuta);
      // Llamada recursiva para explorar subdirectorios
      directorios.push(...obtenerDirectoriosRecursivamente(archivoRuta));
    }
  });

  return directorios;
}

// Ruta de inicio para explorar
const rutaInicio = './'; // Puedes cambiar esto a la ruta de tu elección

// Obtener la lista de directorios y subdirectorios
const listaDirectorios = obtenerDirectoriosRecursivamente(rutaInicio);

// Mostrar la lista por consola
console.log('Lista de directorios y subdirectorios:');
listaDirectorios.forEach((directorio) => {
  console.log(directorio);
});
