// Spread Operator and Destructuring
arr = [1, 2, 4, 6, 32]

function avg(a, b, c) {
    return a+b+c/3
}

// let a = avg(...arr)
// let a = [4, 7, ...arr, 67]
// let a = [...arr]
// let a2 = [5, 7, 9];
// let a = [...arr, ...a2]
let obj1 = {
    name1: "Aarish",
    class1: "8-A",
    favlang: "JavaScript"
}
// let obj2 = {}
// obj2.name1 = obj1.name1
// obj2.class1 = obj1.class1
// obj2.favlang = "Python"
// let obj2 = {...obj1, favlang: "Python"}
// console.log(obj2)

// let name1 = obj1.name1
// let class1 = obj1.class1
// let favlang = obj1.favlang

let {name1, class1, favlang} = obj1; // Destructuring

console.log(name1, class1, favlang)