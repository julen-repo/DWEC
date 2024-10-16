const person = { name: "fdsasa", edad: 32 };
const data = { alto: 342 };
const student = Object.assign({}, person, data);
const customer = { ventas: 1203 };
Object.setPrototypeOf(student, customer);
delete student.name;
student.ventas = 200;
console.log(student.ventas);
delete student.ventas;
console.log(student.ventas);
person.name = "ana";
for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key, student[key]);
    }
}
/*const student = Object.create(person);
student.course = "a";
const customer = Object.create(person);
customer.sales = 1230;
console.log("Student");
for (const k in student) {
    console.log(`${k}:${student[k]}`);
}
console.log("person");
for (const k in person) {
    console.log(`${k}:${person[k]}`);
}
console.log("customer");
for (const k in customer) {
    console.log(`${k}:${customer[k]}`);
}*/
