// let fs = require("fs")
let fs = require("fs/promises")

let a = fs.readFile("file.txt", "utf-8")
a.then((data)=>{
    console.log(data)
})

console.log("This is eof")