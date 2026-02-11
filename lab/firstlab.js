a =  88;
// "const a;" wont work"
var a = 90;
console.log(a)

console.log(`welcome to ${a}`)
let s = "17.55";
s = Number(s)

s = "17.55$"
// s = Number(s)
console.log(s)

s= parseInt(s)
console.log(s)
s = "17.55$"
s = parseFloat(s)
console.log(s)


s = "$17.55"
s= parseFloat(s)//s = NaN
console.log(s)
