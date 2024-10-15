

function sumar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var sum = numero1 + numero2;
    document.getElementById("resultado").innerText = "Resultado: " + sum;
}
function restar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var rest = numero1 - numero2;
    document.getElementById("resultado").innerText = "Resultado: " + rest;
}
function multiplicar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var mult = numero1 * numero2;
    document.getElementById("resultado").innerText = "Resultado: " + mult;
}
function dividir() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var div = numero1 / numero2;
    document.getElementById("resultado").innerText = "Resultado: " + div;
}
