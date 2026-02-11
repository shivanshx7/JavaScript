document.getElementsByTagName("p")[0].innerHTML = "Raghav Khandelwal"
document.getElementsByTagName("p")[0].style = "background-color : beige"
document.getElementsByTagName("p")[0].style.color = "red"

document.getElementsByTagName("p")[0].style.fontFamily = "arial"

// eg = Raghav Khandelwal
// camelCase => raghavKhandelwal
// PacalCase => RaghavKhandelwal
// crab-case => 'raghav-khandewal'
// snake_case => raghav_khandelwal

// CSS(crab-case) => JS(camelCase)

const element = document.getElementById('para');
element.className = "alpha beta"
element.classList.add('theta')
element.classList.remove('alpha')
element.classList.toggle('gamma')
console.log(element.classList)
element.classList.toggle('gamma')
console.log(element.classList)



