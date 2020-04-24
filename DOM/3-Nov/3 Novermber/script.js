var d = document;
// to select an element from your document
var body = d.querySelector("body");
// css=>
//

body.style.backgroundColor = "#3498db";
// to create a element
var h1 = d.createElement("h1");
// set text inside an element
h1.textContent = "Heading created from Javascript";
h1.style.color = "white";
// add a child to an element
body.appendChild(h1);
var p = d.createElement("p");
p.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, eius.";
// insertBefore
body.insertBefore(p, h1);

//
var myclass = d.getElementsByClassName("myclass")[0];
// console.log(myclass);

myclass.style.height = "40vh";
myclass.style.width = "40vw";

myclass.style.backgroundColor = "#2ecc71";

// attributes
var anchor = d.querySelector("a");
//returns an array of anachor tag
var aArray = d.getElementsByTagName("a");
// console.log(aArray);
for (var i = 0; i < aArray.length; i++) {
  aArray[i].setAttribute("class", "voilet");
}
var values = [];
for (var i = 0; i < aArray.length; i++) {
  values.push(aArray[i].getAttribute("value"));
}
console.log(values);

