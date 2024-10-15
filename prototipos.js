const person = { name: "paco", age: 56 };
const student = { course: 'A' };

person.name="aaaaaa";
Object.setPrototypeOf(student,person);
console.log(student.name);