let array = [100, 23, 23, 23, 23, 67, 45];
let outputArray = [];
let outputSet = new Set();

//Sin SET
console.log("---------------------\nSin SET\n---------------------");
for (const c of array) {
    let existe = false;
    for (const n of outputArray) {
        if (n == c) {
            existe = true;
        }
    }
    if(!existe){
        outputArray.push(c);
    }
}

for(const y of outputArray){
    console.log(y);
}

//Con SET
for (const c of array) {
    outputSet.add(c);
}
console.log("---------------------\nCon SET\n---------------------");
outputSet.forEach(element => {
    console.log(element);
});