const favTeam = '["name" : "MI","captain" : "Rohit"]'
// import {div} from ./aftertek10.js 

// try{
//     console.log("catch executes only when error is found before it everything executes") 
//     setTimeout(()=>{let favTeam2 = JSON.parse(favTeam)
//         console.log(favTeam2.captain)
//     },3000)
    
//     console.log("Valid JSON")

// }
// catch(err){
//     console.log("invlalid JSON",err.message)
// }
// finally{
//     console.log("done")
// }
// console.log("next line")

async function f() {
    return 7
}
f()
.then(data=>console.log(data))


async function fun(k,m,j) {
    return j()
}
fun(()=>1,()=>2,()=>3)
.then(data=>console.log(data))



let p = Promise.resolve(7)

async function getData() {
    let data = await p // kab tak promise resolve ya reject nhi hota woh ruka rahega
    console.log(data)
}
getData()

let k = Promise.reject(6)
async function Dataget() {
    try{
        let data = await k
        console.log(data)
    }catch(err){
        console.log(err)
    }
    console.log("99")
    
}
Dataget()

