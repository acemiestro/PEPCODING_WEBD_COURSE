function isOdd(num){
    return (num%2==1);
}
var arr = [5,8,14,17,23,6,8];
var farr = arr.filter(isOdd);//reduces the size of array
console.log(farr);
console.log(arr);