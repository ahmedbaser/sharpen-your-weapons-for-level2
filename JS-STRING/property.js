const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
   'fav places': ['slyhet']
} 

// console.log(person);
// to access value with dot 
// console.log(person.profession)
const income = person.salary;
// console.log(income)

// barcket Notation 
// usign third bracket
console.log(person['age']);
const boys = person['age'];
console.log(boys); 

// show errow 
// console.log(person.'fav places')
console.log(person['fav places']);

const keyName = 'profession';
console.log(person[keyName]);