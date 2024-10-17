const tablero = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
];
let figuras = [];

function figura(tipo) {
    this.x = 0;
    this.y = 0;
    this.tipo = tipo;
}


figura.prototype.moverA = function (x, y, array) {
    array[y][x] = (this.tipo[0]).toUpperCase();
}


function colocarPieza(pieza, array) {
    let randomX, randomY;
    do {
        randomX = Math.floor(Math.random() * 8);
        randomY = Math.floor(Math.random() * 8);
    } while (array[randomY][randomX] !== "");
    array[randomY][randomX] = (pieza.tipo[0]).toUpperCase();
}


function meter_figuras(veces, tipo) {
    for (let index = 0; index < veces; index++) {
        figuras.push(new figura(tipo));
    }
}
meter_figuras(8,"peon");
meter_figuras(2,"alfil");
meter_figuras(2,"caballos");
meter_figuras(2,"torres");
meter_figuras(1,"reina");
meter_figuras(1,"rey");

for(const c of figuras){
    colocarPieza(c, tablero);
}


console.table(tablero);