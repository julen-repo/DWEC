let estado = 0;
let color = "red";

window.addEventListener("click", function () {
    console.log(estado);
    console.log(color);
})
window.addEventListener("load", function () {
    let lienzo = document.getElementById("zonadibujo");

    const tabla = document.createElement('TABLE');
    tabla.setAttribute("class", "tablerodibujo");

    for (let k = 0; k < 50; k++) {
        const filas = document.createElement('TR');
        filas.setAttribute("class", "tablerodibujo")
        for (let j = 0; j < 50; j++) {
            const celdas = document.createElement('TD');
            celdas.setAttribute("class", "tablerodibujo");
            filas.append(celdas);
        }
        tabla.append(filas);
    }

    lienzo.append(tabla);

    function pintar() {
        switch (color) {
            case "amarillo":
                this.setAttribute("style", "background-color:yellow");
                break;
            case "verde":
                this.setAttribute("style", "background-color:green");
                break;
            case "negro":
                this.setAttribute("style", "background-color:black");
                break;
            case "rojo":
                this.setAttribute("style", "background-color:red");
                break;
            case "azul":
                this.setAttribute("style", "background-color:blue");
                break;
            case "blanco":
                this.setAttribute("style", "background-color:white");
                break;
        }
    }
    let tablero = document.querySelectorAll(".tablerodibujo");
    tablero.forEach(element => {
        element.addEventListener("click", function (e) {
            if (estado == 0) {
                estado = 1;
            } else {
                estado = 0;
            }
            switch (estado) {
                case 0:
                    document.getElementById("pincel").innerHTML="Sin pintar";
                    break;
                case 1:
                    document.getElementById("pincel").innerHTML="Pintando";
                    element.addEventListener("mousemove", pintar());
                    break;
            }
        });
    });
/*
    colores("color1 seleccionado");
    colores("color2");
    colores("color3");
    colores("color4");
    colores("color5");
    colores("color6");

    function colores(clase) {
        document.querySelector("."+clase).addEventListener("click", function (e) {
            switch (clase) {
                case "color1 seleccionado":
                    color="amarillo";
                    break;
                case "color2":
                    color="verde";
                    break;
                case "color3":
                    color="negro";
                    break;
                case "color4":
                    color="rojo";
                    break;
                case "color5":
                    color="azul";
                    break;
                case "color6":
                    color="blanco";
                    break;
                default:
                    break;
            }
        })
    }*/
});