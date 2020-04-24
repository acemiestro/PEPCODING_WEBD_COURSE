var x=10;
function myFun(){
    console.log(x);
    var x=20;
    x+=1;
    console.log("Line 4 "+x);
    if(true){
        var x=30;
        x+=1;
        console.log("line 7 "+x);
    }
    console.log(x);
}
myFun();
console.log("Line 12 "+x);
