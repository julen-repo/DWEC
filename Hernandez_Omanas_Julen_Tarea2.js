let frase = "en un lugar de la mancha";
frase.substring()
let f4 = dato => {
    /*console.log((dato.split(" ")).map(e => {
        for (let i = 0; i < e.length; i++) {
            if (i == 0) {
                e[i].toUpperCase();
            } else {
                e[i].toLowerCase();
            }
        }
        return e; 
    }).join(""));*/
    let array=[];
    dato.split(" ").forEach(element => {
        array.push(element[0].toUpperCase());
        array.push(element.substring(1,element.length));
    });
    console.log(array.join(""));
}
f4(frase);
let f5 = dato => {
    let a = dato.split(" ");
    let b = a.reduce((previus, n) => previus.length + n.length);
    console.log(b / a.length);
}
f5(frase);
let f6 = dato => {
    let contA = /[a]+/;
    console.log(dato.split(" ").filter(e => contA.test(e)));
}
f6(frase);
//LAURA PROBANDO A CAMBIAR COSAS DESDE VSCODE
