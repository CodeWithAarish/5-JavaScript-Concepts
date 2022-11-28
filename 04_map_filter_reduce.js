// JavaScript Map
let a = [1, 2, 3, 4, 5, 64, 34, 12, 9];
let a2 = a.map((value)=>{
    return value * 2;
})

// console.log(a, a2)

// Javascript Filter
let a3 = a.filter((value)=>{
    return value > 6;
})
console.log(a, a3)
// Javascript Reduce