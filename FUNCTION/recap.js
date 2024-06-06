function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);

function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add(5, 10);
console.log(bill, bill2);

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const muliply = sum * diff;
    const result = muliply / 2;
    return result;
}

const output = doMath(56, 88);
console.log(output);