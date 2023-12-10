// creating a parent Element variable which gets the content of the ID "root" and printing it 
let parentElement = document.getElementById("root")

console.log(parentElement)

// creating child node with element type - div 
let childElement = document.createElement('div')

// Content of what is inside the div 
// childElement.innerHTML = `<p>ID: <span>1</span></p>
// <p>Title: <span>Card 1</span></p>
// <p>Body: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//         labore et
//         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
// //         ut 1</span></p>`
// parentElement.appendChild(childElement)

let count = 10

for (let i = 1; i <= count; i++){
    let loopElement = document.createElement('div')
    loopElement.classList.add("card")
    loopElement.innerHTML = `<p>ID: <span>${i}</span></p>
<p>Title: <span>Card ${i}</span></p>
<p>Body: <span>Content ${i}</span></p>`

parentElement.appendChild(loopElement)

}


