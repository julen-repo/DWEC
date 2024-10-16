
let lista1 = new Array();
let lista2 = new Array();
lista1 = [1, 2, 3, 4, 54, 6, 54, 654, 3, 4355643, 65432231, 43125646];
lista4 = [1, 2, 3, 4, 54, 6, 54, 654, 4355643, 65432231, 43125646];
lista2 = ["Pepe", "Juan", "Maria"];


//Concat de arrays esto desde github
let lista3 = lista1.concat(lista2);
console.log("Concat de arrays\n-------");
for (const c of lista3) {
    console.log(c);
}
console.log("-------");

//Meter al final del array
console.log("Push 7777\n-------");
lista1.push(7777);
for (const c of lista1) {
    console.log(c);
}
console.log("-------");

//Sacar el ultimo valor del arrray
console.log("Pop \n-------");
lista1.pop();
for (const c of lista1) {
    console.log(c);
}
console.log("-------");

//Elementos de un array a string
let cadena = lista1.join();
console.log(`Join \n-------\n${cadena}\n-------`);

//Longitud array
console.log(`Lenght \n-------\n${lista1.length}\n-------`);

//Sacar el primer valor del arrray
console.log("Shift \n-------");
lista1.shift();
for (const c of lista1) {
    console.log(c);
}
console.log("-------");

//Añade un valor al principio del array
console.log("UnShift \n-------");
lista1.unshift("Primero");
for (const c of lista1) {
    console.log(c);
}
console.log("-------");

//Invertir las posiciones del array
console.log("Reverse \n-------");
lista1.reverse();
for (const c of lista1) {
    console.log(c);
}
console.log("-------");

//Ordenar array
console.log("Sort \n-------");
lista1.sort();
for (const c of lista1) {
    console.log(c);
}
console.log("-------");

//Posicion de un valor en concreto
console.log("IndexOf \n-------");
console.log(lista1.indexOf(3));
console.log("-------");

//Ultima posicion de un valor en concreto
console.log("LastIndexOf \n-------");
console.log(lista1.lastIndexOf(3));
console.log("-------");

//Partir un array
console.log("Slice \n-------");
lista5 = lista1.slice(1, 10);
for (const c of lista5) {
    console.log(c);
}
console.log("-------");

//Meter y sustiruir posiciones en arrays
console.log("Slice \n-------");
lista1.splice(0, 1, "Hola");
for (const c of lista1) {
    console.log(c);
}
console.log("-------");

//Ordenar array bien
console.log("Sort con funcion \n-------");
lista1.sort(function (a, b) {
    return a - b;
});
for (const c of lista1) {
    console.log(c);
}
console.log("-------");
