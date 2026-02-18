let wada = new Promise((resolve,reject)=>{
    // resolve("pura kiya vada")
    reject("nhi kiya pura")
})
console.log(wada)
wada
.then((value)=> console.log("bhaichara on top |",value))
.catch((value)=>{console.log("kaun ho app |",value)})
.finally(()=>{console.log("bhai bhai hota h")})

let p = new Promise((resolve,reject)=>{
    resolve()
})
let p2 = p.then((value)=> 20)  

p.then((value)=>value *2)
p.then((value)=>value *3)
p.then((value)=> console.log(value))

console.log(p2)

setTimeout(()=>{
    let vbn = "food ready"
},1000)
console.log(vbn)