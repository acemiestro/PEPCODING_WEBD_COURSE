var log = console.log
var arr=[
    1,1.1,
    true,false,
    undefined,
    function sayHi(){
        log("Hi Steve")
    },
    "I am a String",
    [1,2,3,4,5]
]
//log(arr)
// log(arr.length);
// log(arr[arr.length]);
// arr[95]="Some value";
// log(arr.length);
// log(arr[30]);
// //Add Last
// arr.push("Last Value");
// log(arr);
// log("//////////////////");
// arr.pop();
// log(arr);
// var slicedarr = arr.slice(2,4);
// log("Sliced Array")
// log(slicedarr)
// log("Actual Array ")
// log(arr)
// var splicedarr = arr.splice(2,4);
// log(splicedarr)
//includes
var ans = arr.includes("I am a String ");
log(ans);
var ans = arr.includes("I am not a String");
log(ans);
