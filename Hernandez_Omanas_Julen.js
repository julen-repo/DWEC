
let a = [1, 2, 3, 4];
let f1= array=>{
    console.log((array.map(e => e * 3)).filter(x => !(x % 4)));
}
f1(a);
let f2= array2=>{
    console.log(array2.filter(x => !(x % 2)));
}
f2(a);
function f3(array3){
    array3.forEach((element,indice) => {
        if(indice%2){
            console.log(element)
        }
    });
}
/*let f3= array3=>{
    array3.forEach((element,indice) => {
        if(indice%2){
            console.log(element)
        }
    });
}*/
f3(a);