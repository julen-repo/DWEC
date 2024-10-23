const persona = {
    nombre: 'Pepe',
    apellidos: ['Garcia', 'Perez'],
    edad: 23
};
const persona2 = {
    apellidos: ['Garcia', 'Perez']
};

const { nombre: ej1, edad: ej2 } = persona;

const arr = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

const [lu, , mi] = arr;
const { apellidos: [apellido1, apellido2] } = persona;

function verDatos({ nombre = "luis", edad = 20 }) {
    console.log("Nombre persona: " + nombre);
    console.log("Edad persona: " + edad);
}
verDatos(persona);
verDatos(persona2);