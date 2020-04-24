// Generic Tree Structure
var d = document;

// Get any element in html, body or head 
var body = d.querySelector("body");

// add css
// body.style.backgroundColor = "goldenrod";

// Create element
var h1 = d.createElement("h1");
h1.textContent = "HEADING h1 FROM JS";
h1.style.textAlign = "center";
// h1.style.color = "white";
// body.appendChild(h1);

document.getElementById("Pen").addEventListener("click", display);
// var x = d.getElementById("Pen");
// console.log(x);
// x.addEventListener("click", display);

function display(){
    var y = d.getElementById("Demo");
    console.log(y);
    y.innerHTML = "PEN"; 
}

