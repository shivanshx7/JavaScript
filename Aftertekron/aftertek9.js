// // let score = 96
// let a = new Promise((resolve,reject)=>score > 90? resolve("Prize from Dad"):reject("No prize"))
// a
// .then((value)=> console.log(value,"Got gift"))
// .catch((value)=> console.log(value,"No Gift") )
// .finally(()=> console.log("mess me fir aloo"))


// function applyLoan(creditScore) {
//     return new Promise((resolve,reject)=>{setTimeout(()=>creditScore>700?resolve("approve"): reject("rejected"),3000)})
        
// }
// applyLoan(706)
// .then((value)=>{console.log("Applying...")})
// .catch((value)=>{console.log("Waiting...")})

let score =97
function checkScore(score) {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (score > 95){
                resolve("Gift Recoved")
            }else {
                reject("Not Recived")
            }
        })
    })
}