/* 
* for a string tell me whether it has even number of  the character or not 
*/


function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0) {
        console.log('event  size');
        return true;
    }
    else {
        console.log('odd size')
        return false;
    }
}

// evenSizedString("Dhaka");
// evenSizedString("fake");


function doubleOrTriple(number, doDouble) {
     if(doDouble === true) {
        const result = number * 2;
        return result;
     } else {
        const result = number * 3;
        return result;
     }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}
const value = numberOfElements([12,34,56,78,90])
console.log(value);