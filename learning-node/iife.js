console.log(global);


((name) => {
    const a = 10; // block scoped
    console.log(`I will level up skills in ${name}`);
})('level2');

// console.log(a);
console.log(__dirname, __filename, module)