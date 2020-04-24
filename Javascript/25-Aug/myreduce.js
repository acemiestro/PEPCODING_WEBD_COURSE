function multiplier(num1,num2)
{  
    return num1*num2;
}
var arr=[1,2,3,4,5];
var narr=arr.reduce(multiplier);
console.log(narr);