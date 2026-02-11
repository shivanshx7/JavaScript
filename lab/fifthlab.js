let str="*"
for (let i = 1 ; i < 5 ;  i++ ) {
    console.log(str.repeat(3))
}
let str1="    RAM      "
console.log(str1.trim())

let str2 ="hi" ; 
str2= str2.padStart(5,"*")
console.log(str2)

for (let i = 1 ; i < 5 ; i++){
    console.log("*".repeat(i))
}
for (let i = 1 ; i < 5 ; i++){
    console.log("*".repeat(i).padStart(5," "))
}
for (let i = 1 ; i < 5 ; i++){
    console.log("*".repeat(i).padStart(5," ").padEnd(8,"-"))
}
for (let i = 1 ; i < 5 ; i++){
    console.log("*".repeat(i).padEnd(8,"-"))
}

console.log("Hi there student".includes("the"))

console.log("Hi there student".indexOf("the"))
console.log("Hi there student".indexOf("tke"))

// splice wont work but slice will
console.log("hi there".toUpperCase().split("")) // split to every character
console.log("HI there man".split(" ")) // split by empty space
console.log("HI there man. Hope you are Fine".split(".").length-1) // no. of sentences


console.log((67).toString())// decimal
console.log((67).toString(2))// binary
console.log((67).toString(8))// octal

console.log((16).toString(16)) // doent give rigth value hence doesnt work on hexadecimal


// let val = document.querySelector("H1")
// console.log(val,typeof val)// object

// .querySelectorAll(gives array of element
// let val1 = document.querySelectorAll("h1")// gives an array
// val1[1].innerText = "New text"

// let val2= document.querySelectorAll("div#box")
// val2.innerHtml = `
