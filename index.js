// When clicked, render a paragraph under the button(in the container)
// that says "Thank you for buying"


const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy Now to Get the Full Benefits!</button>"

function buy(){
  container.innerHTML += "<p>Than you for buying!</p>"
}