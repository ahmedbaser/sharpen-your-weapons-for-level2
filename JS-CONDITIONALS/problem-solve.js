// problem 1 solved
// for(let i = 1; i <= 200; i++) {
//     if(i == 100) {
//         console.log(i)
//         break;
//     }
//     console.log(i);
    
// }


// problem 2 solved
// let sum = 0;
// let i = 1;
// while(true) {
//   sum += 1;
//   if(sum >= 100) {
//     console.log('loop is exceeds from 100')
//     break
//   }

//   i++;
// }



// problem 3 solved

// for(let i = 1; i <= 100; i++) {
//     let square = i * i;
//     if(square == i) {
//         console.log('Frist square number encounters', i);
//       break;
//     }
// }



// problem 4 solved

// let sum = 0;
// for(let i = 1; i <= 40; i++) {
//    if(i % 2 !== 0) {
//     continue;
//    }
//    console.log(i)
// } 

// problem 5 solved

// for(let i = 55; i <= 85; i++) {
//     if(i % 2 !== 0 && i % 5 !== 0) {
//       console.log(i)
//     }
   
// }

// problem 6 solved

// for(let i = 1; i <=60; i++) {
//     console.log( i ,"I will invest at least 6 hrs every single day for next 60 days!")
// }


// problem 7 solved
// for(let i = 61; i <= 100; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

// problem 8 solved

// for(let i = 78; i <= 98; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// problem 9 solved
// let sum = 0;
// for(let i = 91; i <= 129; i++) {
//        if(i % 2 !== 0) {
//           sum = sum + i;
         
//       }
//    }
//    console.log(sum) 
   
// problem 10 solved
// let sum = 0;
// for(let i = 51; i <= 85; i++) {
//        if(i % 2 == 0) {
//           sum = sum + i;
         
//       }
//    }
   // console.log(sum) 


// problem 11 solved

// Define the number for which to generate the multiplication table
// const number = 9;
// Define the range for the multiplication table
// const range = 10;
// for(let i = 1; i <= range; i++) {
//    console.log(`${number} * ${i} = ${number * i}`);
// }

// problem 12 solved

// const startValue = 81;
// const endValue = 65;
// // Function start the comedown timer
// function countdownTimer() {
//    let currentValue = startValue;
//    const comedownInterval = setInterval(() => {
//       console.log(currentValue);
//       currentValue--;
//       if(currentValue < endValue) {
//          clearInterval(comedownInterval);
//       }
//    },  1000) // Countdown interval set to 1 second (1000 milliseconds)
// }

// countdownTimer();


// problem 13 solved

// Define the starting and ending numbers
// let num= 61;

// // Use a while loop to find and display all odd numbers
// console.log("Odd numbers from 61 to 100:");
// while (num <= 100) {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
//     num++;
// }


// problem 14 solved
// let sum = 0
// let  i = 81;
// while(i <= 131) {
//    if(i % 2 !== 0) {
//      sum += i;
    
//    }
//    sum++;
// }
// console.log(sum)

// problem 15 solved

// Define the number for which to generate the multiplication table
let number = 5;

// Define the range for the multiplication table
const range = 10; // Multiplication table from 1 to 10

// Generate and display the multiplication table
for (let i = 1; i <= range; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}
