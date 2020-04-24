var arr=[1,2,3,4,5];
function doublet(num)
 {
    return 2*num;
 }
 function transformer(arr,fn)
 {
     var narr=[];
     for(var i=0;i<arr.length;i++)
     {
         var ans = fn(arr[i]);
         narr.push(ans)
     }
     return narr;
 }
var dArr=transformer(arr,doublet);
console.log(dArr);
console.log(arr);