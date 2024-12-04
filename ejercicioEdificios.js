let prueba = new Edificio("romero", 2, 47140);
let movilaria = new Inmovilaria;
let persona1 = new Propietario("Pedro", "Hombre", 3)
prueba.agregaPlantasYPuertas(4, 4);
prueba.agregarPropietario(persona1, 1, 1);
movilaria.addEdificio(prueba);
console.log(movilaria.getEdificio("romero", 2));
prueba.imprimePlantas();
console.log(prueba.getNumeroPlantas());
console.log(prueba.getNumeroPuertas(1));