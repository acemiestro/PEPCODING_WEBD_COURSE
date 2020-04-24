function buildFunction(){
    var arr=[];
    for(var i=0;i<3;i++){
        arr.push(
            (function(){
                console.log(i);
            })()//immediately invoke function expression
            //by doing this now the function will be immediately 
            //called for different values of i and when 
            //we will access fn[i], 
            //it willl show different values of i
        )
    }
    return arr;
}
var fn=buildFunction();
//fn[0]();// Closure property stores the last 
 //value of i where the loop got break ie. 3, 
//hence when we are calling fn, we are getting the value 3

//console.log(fn);// undefined bcoz function is not returning anything.
//The function is just printing values
