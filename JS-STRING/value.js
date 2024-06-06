const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
   'fav places': ['slyhet']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'bail', 'pataya'];

const propName = 'profession';
person[propName] = 'develops';
console.log(person);



