const collage = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
           gpa: 5,
           merit: 'top'
        }
    }
} 


// console.log(collage.unique);
console.log(collage.unique.result.merit)
collage.events[1] = '16 december';
console.log(collage.events[1]);
delete collage.class;
console.log(collage);