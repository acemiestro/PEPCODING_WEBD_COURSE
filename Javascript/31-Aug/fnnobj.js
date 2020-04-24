var steve={
    name:"Steve",
    age:"105",
    getAge(){
        // return "My Name is "+steve.age;//this is wrong
        return "My Name is "+this.age;//this will pass the variable called in function//is decide at runtime
    }
}
console.log(steve.getAge());
var hydra=steve;
steve=null;
console.log(hydra.getAge());