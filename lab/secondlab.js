// let arr1 = [4,5];
// arr1.push(6)
// arr1.unshift(3)
// console.log(arr1)

// // arr1.shift()
// arr1.pop()
// console.log(arr1)

// let val= arr1.push("7") // gives (1based)index where it will insert
// console.log(arr1,val)

let a = [1,"a",null,undefined,[],{},true,function abc(){}]
// for (let i = 0 ; i < a.length ; ++i){
//     console.log(i,a[i])
// }

// for(let i in a){
//     console.log(i)
// }
// console.log("-")
// for(let i of a){
//     console.log(i)
// }


let arr = ["a","b","c","d"]
// splice(start,deletecount,item1,item2)


// let val = arr.splice(0)
// console.log(arr,val)


// let val = arr.splice(2)
// console.log(arr,val)

// let val = arr.splice(2,1,"k","m","l")
// console.log(arr,val)

// let val = arr.splice(2,1)
// console.log(arr,val)

// let val = arr.splice(2,1,0)
// console.log(arr,val)

// let val = arr.reverse()
// console.log(arr,val)


// let val = arr.join()
// console.log(arr,val)

// let val = arr.join("-")
// console.log(arr,val)

// let val = arr.join("-")
// console.log(arr,val)

//DIFFERENT B/W SLICE AND SPLICE
// slice will create new
// splice will change the original



// to check if palindrome
// let str=arr.join("")// abcd
// arr.reverse();// ["d","c","b","a"]
// let str2= arr.join("")// dcba
// console.log(str2==str)// dcba == abcd


let val = arr.slice(1,3)
console.log(arr,val)



// function abc(a,b=0) {
//     console.log(a+b)
// }
// abc(5,10)
// abc(2)

//SCOPE

// {
//     var a=10;
//     let b = 20;
// }
// console.log(a)
// console.log(b)

// Function SCOpe

// function ab(a,b) {
//     var a = 10;
//     let b = 20;
// }
// console.log(a)
// console.log(b)

// Hoisting

// console.log(a)
// var a = 10;