function greeter(variable){
    return "Hi "+variable();
}
// console.log(greeter(4));
// console.log(greeter("I am also a String"));
console.log(greeter(function(){
    return "I am also a variable";
}));
