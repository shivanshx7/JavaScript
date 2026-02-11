const inputField = document.getElementById('i1')
const inputField2 = document.getElementById('i2')
// const listelement = document.querySelectorAll('input')



function inputHandler(event){
    // console.log(event.target.value)
    console.log(event.target.value)
    const data= event.target.value
    console.log(data)
    // const data = inputField.value;
    // console.log(data);
}
// listelement.addEventListener('input',inputHandler)
inputField.addEventListener('input',inputHandler)
inputField2.addEventListener('input',inputHandler)
