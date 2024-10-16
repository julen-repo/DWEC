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
function figura(tipo) {
    this.x = 0;
    this.y = 0;
    this.tipo = tipo;
}
figura.prototype.moverA = function (x, y, array) {
    array[y][x] = (this.tipo[0]).toUpperCase();
}
function colocarPieza(pieza, array) {
    let randomX = Math.floor(Math.random() * 8);
    let randomY = Math.floor(Math.random() * 8);
    if (array[randomY][randomX] == "") {
        array[randomY][randomX] = (pieza.tipo[0]).toUpperCase();
    }
}
const alfil = new figura("alfil");
const reina = new figura("reina");
const rey = new figura("rey");
const torre = new figura("torre");
const caballo = new figura("caballo");
const peon = new figura("peón");

colocarPieza(alfil, tablero);
colocarPieza(reina, tablero);
colocarPieza(rey, tablero);
colocarPieza(torre, tablero);
colocarPieza(caballo, tablero);
colocarPieza(peon, tablero);


console.table(tablero);