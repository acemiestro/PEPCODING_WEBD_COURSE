function isOdd(num){
    return (num%2==1);
}
function includer(arr,fn)// arr.filter function is used
{
    var farr=[];
    for(var i=0;i<arr.length;i++)
    {
        if(fn(arr[i]))
        {
            farr.push(arr[i]);
        }
    }
    return farr;
}
var arr = [5,8,14,17,23,6,8];
var farr=includer(arr,isOdd);
console.log(farr);
console.log(arr);
