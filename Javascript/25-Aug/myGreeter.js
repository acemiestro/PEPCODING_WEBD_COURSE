function getFirstName(name){
    return name.split(" ")[0];
}
function getLastName(name){
    return name.split(" ")[1];
}
function greeter(fullName,fn)
{
    var greet = fn(fullName);
    console.log("Hi "+greet);
}
greeter("Steve Rogers",getFirstName);
greeter("Steve Rogers",getLastName);
