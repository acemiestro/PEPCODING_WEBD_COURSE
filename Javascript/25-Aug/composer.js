function multiplier(num1,num2)
{  
    return num1*num2;
}

function composer(arr,fn)
{
    var total=arr[0]
    for(var i=1;i<arr.length;i++)
    {
        var res = fn(total,arr[i])
    }
    return total;
}
var arr=[1,2,3,4,5];
narr = composer(arr,multiplier)
console.log(narr);
console.log(arr);