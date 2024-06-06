const salary = 21001;
const isBCS = true;
const height = 78;
const hasCar = false;

// if(salary > 20000 && height > 66) {
//     console.log('Su---patro')
// } else {
//     console.log('onno patro khuji')
// }

// if(salary > 25000 || height > 22) {
//     console.log('eso baba kobul')
// } else {
//     console.log('vaag tui mokbul')
// }

// more and more condition 
// if(salary > 25000 || height > 22 || isBCS == true) {
//     console.log('eso baba kobul')
// } else {
//     console.log('vaag tui mokbul')
// } 

if(salary > 25000 && height > 22 && isBCS == true) {
    console.log('eso baba kobul')
} else {
    console.log('vaag tui mokbul')
} 

//-----------------COMPLEX CONDITION------------------

if((salary > 25000 || hasCar == true)&& isBCS == true) {
 console.log('tumar 14 gusti razi')
}