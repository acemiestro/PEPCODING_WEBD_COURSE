var cap={
    name:"Steve",
    lastName:"Rogers",
    age:105,
    movies:["civil war","first avenger","avengers"],
    address:{
        city:"New York",
        state:"Manhatten"
    },
    sayHi:function(){
        console.log("Hi from Steve");
    },
    key:"I am your key"
}
// for(var key in cap)
// {
//     console.log(key+": "+cap[key]);
// }
cap.NewValue="Created Value";
cap.NewValue="Updated value";
// delete cap.sayHi;
console.log(cap)
//console.log(cap["lastName"]);