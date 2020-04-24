function getData(num ,cb){
    setTimeout(function(){
        cb(num);
    }, 1000);
    }
var x=0;
var y=0;
function fn1(num){
    x=1+num;
    console.log(x);
    getData(20,fn2);
}
function fn2(num)
{
    y=1+num;
    console.log(y);
    getData(x+y,fn3);
}
function fn3(num){
    var z=num;
    console.log(z);
}
getData(10,fn1);

