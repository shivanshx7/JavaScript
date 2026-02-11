console.log(10)



function HI(){
 Hello()
}
function Hello(){
    console.log("HI")
}
HI()

Hello = () => {
    HI()
}
HI = () => {
    console.log("HI")
}