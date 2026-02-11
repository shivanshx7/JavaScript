let p1_name = "sdfsdf";
p2_stock = 2000
p3_price = 78
p1_stock = 1000

function printValue() {
    console.log(p1_name,p2_stock

    )
}
printValue()
console.log("--")
let p1={
    name:"WDAFsd",
    price:900,
    units : 78 ,
    printDetails : function(){}
}
for (i in p1){
    console.log(i)}// console.log(p1.name,p1["name"])
// p1.printDetails()

let product=[
    {
        userID:"", 
        
    }
]
let jsonString = '{"name":"John", "age":"30" , "city": "New York"}'

let obj = JSON.parse(jsonString)
console.log(typeof obj)

obj=JSON.stringify(obj)
console.log(typeof obj)

obj = JSON.parse(jsonString)
console.log(obj.name)
