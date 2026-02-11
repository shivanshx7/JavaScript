let calculate = (radius,logic) => {
    let output = [];
    for (let i of radius){
        output.push(logic(i))
    }
    return output;
}
console.log(calculate([10,20,30],(r)=> {
    return 3.14*r*r
}))
console.log(calculate([10,20,30],(r)=>{
    return 2*3.14*r
}))
console.log(calculate([10,20,30],(r)=>{
    return 2*r
}))

function filter(array,logic){
    output = []
    for (let i of array){
        
        if (logic(i)){
            output.push(i)
        } 
    }
    return(output)
}
a = [2,3,1,7,8,10]
console.log(filter(a, n => n % 2== 0 ? true : false))
console.log(filter(a, n => n % 2!= 0 ? true : false))
console.log(filter(a, n => n % 5== 0 ? true : false))

