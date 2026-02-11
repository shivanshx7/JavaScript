// functions are called first class cititzen they have very high value. THEY CAN BE USED AS VARIABLE

function outer(inner){
    inner()
}

// function inner(){
//     console.log("hi")
// }
// outer(inner)



outer(
    ()=>{
        console.log("hello")
    }
)
// This is called callback


function add(a,b){
    return a+b
}
function subtract(a,b){
    return a - b
}
function multiply(a,b){
    return a*b 
}
function divide(a,b){
    return  a/b
}

function calculate(fun,a,b){
    fun(a,b)
}

calculate(
    (a,b)=>{
        console.log(a + b)
    },2,1
)
calculate((a,b)=>a*b,30,40)

let radii = [20,30,40]

function ca(r){
    return (Math.PI)*r*r
}
for (let i of radii){
    console.log(ca(i))
}