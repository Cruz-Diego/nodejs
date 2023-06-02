const argv = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors');
//console.log(argv)

const nombre = argv.nombre
//const apellido = argv.apellido
//console.log(`Nombre: ${nombre}, Apellido: ${apellido}`);

const nombres = [
  "Andres", 
  "Andres de Anda", 
  "Christian",
  "Damian",
  "Dani",
  "Diego",
  "Dan",
  "Gustavo",
  "Ignacio",
  "Jorge",
  "Karla",
  "Lau",
  "Luis",
  "Mara",
  "Max",
  "Pao",
  "Roberto",
  "Samantha"
]

const findName = (nombre) => {
  //console.log("Estamos en la funcion findName con el nombnre =>", nombre);
  const existe = nombres.includes(nombre)
  if(existe) {
    console.log("Bienvenido.".rainbow)
    return
  } 
  console.log("Fuera de aqui".red)
}

findName(nombre)