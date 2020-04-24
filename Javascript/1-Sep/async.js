//before
console.log("I was called before setTimeout");
setTimeout(sayHi,2000);
function sayHi(){
    console.log("Hi Steve");
}
console.log("I was callled after setTimeout");
while(true){
    console.log("I am Infinite");
}
//after