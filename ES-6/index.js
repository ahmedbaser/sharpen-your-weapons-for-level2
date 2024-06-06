const myArray = [1, 2, 3]; // [1 2 3 4]
//[1][2][3][4][][][1][2][3][5]
//here usign spread operator ... to copied array with new refrence spread work in arrys as well as object
const myCopiedArray = [...myArray]; // [1 2 3 5]
myArray.push(4);
myCopiedArray.push(5);
// console.log(myArray);
// console.log(myCopiedArray);

// about rest operator to usign this i can do addiion or anything wuth million of number
const  myAddFunction = (fristNum,secondNum, ...rest) => {
    console.log(fristNum); 
    console.log(secondNum); 
    console.log(rest);
    let sum = 0;
    rest.forEach((num)=> {
     sum = sum + num;
    
   })
   console.log(sum)
}
// myAddFunction(1, 2, 3, 4, 5 ,6)

// spread also work in object 
const myObject = {
    name:'baser',
    position: 'Mearn stack developer'
}

const myAnoutherObject = {
    age: 22,
    location: 'sylhet'
}
const myFinalObject = {
    ...myObject,
    ...myAnoutherObject,
}
// console.log(myFinalObject);


const greatNextLevelDeveloper = (name) => {
    const greetMsg = 'Hello ' + name + ' welcome to the next level';
    const newgreetMsg = `hello ${name}, welcome to the next level`
    // console.log(newgreetMsg);
}

// greatNextLevelDeveloper('baser')
  export const greetNewdeveloper = (name) => {
   const newGreetMsg = `hello new developer ${name}, welcome to the next level`
//    console.log(newGreetMsg)
}

const greetSupperDeveloper = (name)=> {
    const newGreetMsg = `hello Supper developer ${name}, welcome to the next level`
    // console.log(newGreetMsg);
}

const greetUltraDeveloper = (name)=> {
    const newGreetMsg = `hello Ultra developer ${name}, welcome to the next level`
    // console.log(newGreetMsg);
}

export{greetSupperDeveloper, greetUltraDeveloper}

export default greatNextLevelDeveloper;

      
// destructuring topic 
const myFriends = ['taj','salama','sazid'];
// console.log(myFriends[0]);

//[]
//[taj]          [salama]      [sazid]  [][][]
//[bestFriend][normalFriend][goodFriend][][][]

// destructuring array
const [bestFriend, normalFriend, goodFriend] = myFriends;
// console.log(bestFriend); 
// console.log(normalFriend); 
// console.log(goodFriend); 


// destructuring object
const myAddress = {
    house: 10,
    block: 'D',
    road: 'kulawra',
    area: 'Sylhet',
    location: 'sylhet',
    // postal: {
    code: 3223
//    }
}

const{house, block} = myAddress;
// console.log(block, house)

// -------------------------

// dot method
// console.log(myAddress.hou se)

// ----------------------------


// ---------------------------

// bracket syntax type-1
const myRoad = 'road';
// console.log(myAddress[myRoad]);
// type-2
const myArea = 'area';
// console.log(myAddress[myArea]);
// console.log(myAddress['house']);
// console.log(myAddress.postal.code)
// ? this called [optional chaining operator] that show undefine if the code doesn't exist;
// console.log(myAddress.postal?.code)
// --------------------------------


/* 
 Array-->
  1. variable name can be anything / any name
  2.position cannot be change, position of an array values are fiexd

 Object -->
 1. variable name are fixed by the object property name
 2. position can be independed

*/

// -------------------------------
const  myAddressTwo = {
      house: 10,
      block: "D",
      road: "Sylhet",
      area: "Sylhet",
      location: 'Kulawra'

}
// console.log(myAddressTwo.postal?.code);

/*
     topic --> ternary operator
     it's work like (if else) so it's most important
     for pratice 
 */

const  myPostalCode = myAddressTwo.postal?.code ? myAddressTwo.postal.code : 1287
// console.log(myPostalCode);

// --------------------------------------

const fetchData = new Promise((resolve, reject) => {
   setTimeout(() => {
    const data = 'Welcome next level developer';
    const error = false;
    if(!error) {
     resolve(data);
    } else {
        reject('Goodbye developer! I am danger')
    }
   }, 2000) 
});

// fetchData.then((data) => {
//     console.log(data);
// }).catch((error) =>{
//    console.log(error);
// })

// ---------------------

async function getData() {
    try {
       const data = await fetchData;
       console.log(data, '......try block');
    } catch(error) {
     console.log(error, '......catch block');
    }
}

getData();





