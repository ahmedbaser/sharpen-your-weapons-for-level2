const id = '78';
//padding
const fullId = id.padStart(6, 'a');
const fullId2 = id.padEnd(6, 'a');
// console.log(fullId);

const studentNumber = 1;
// console.log(studentNumber);
// const studentNumberString = studentNumber.toString();
// console.log(studentNumberString.padStart(4, "0"));

// const names = ['mir', 'Mezba', 'Firor', 'Tannoy'];
//   for loop type 1 
// for(let i=0; i < names.length; i++) {
//     // console.log('Welcome to L2 ', names[i]);
// }
//   for loop type-2 
// for(let mentor of names) {
//     // console.log('Welcome to L2 ', mentor)
// }

const mentor = {
    name: 'Mir',
    age: 25,
    isMentor: true,
}
     //just usign for loop
    //  -----------------------
const mentorKeys = Object.keys(mentor);
// console.log(mentorKeys);

for(let i = 0; i < mentorKeys.length; i++) {
    // console.log(mentorKeys[i])
}
// ---------------------------
//    usign for in loop 
for(let key in mentor) {
    // console.log(mentor[key]);
}
// ----------------------------
//  [for of] loop shorthand is for [Eachloop]
// const names = ['mir', 'Mezba', 'Firor', 'Tannoy'];
// forEach allways work in arrays but doesn't work in object
// names.forEach((value) =>{
//     console.log(value);
// });

// const randomFunction = (fn) => {
//     return fn(3);
// }
//  randomFunction((number) => {
//     console.log(2 + number);
//  });


const mentorList = [
{
    name: 'Mir',
    age: 25,
    isMentor: true,
},

{
    name: 'Mir',
    age: 29,
    isMentor: true,  
},

{
    name: 'Mir',
    age: 27,
    isMentor: true,
}
];

// const mentorAgeMoreThan25 = mentorList.filter((mentorObject)=> {
//     if(mentorObject.age > 25) {
//         return mentorObject;
//     }
// });

// const mentorAge25 = mentorList.find(mentorObject(mentorObject) => {
// //   if(mentorObject.age === 25);
// //   return mentorObject
// // });

// console.log(mentorAgeMoreThan25)