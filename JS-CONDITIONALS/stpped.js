/* 
* MULTI_LEVEL CODITION

*/

const price = 5000;
if(price >= 5000) {
    const discount = price * 10 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
} else {
    console.log(price)
}