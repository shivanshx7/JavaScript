const div = document.getElementById("1")
fetch('https://dummyjson.com/products/1')
.then((response)=>response.json())
.then((data)=> {div.innerHTML = `<h3>${data.title}</h3><p>${data.description}</p><p>${data.category}</p>`})