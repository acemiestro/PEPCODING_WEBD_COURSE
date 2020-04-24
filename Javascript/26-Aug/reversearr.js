var arr = [1,2,3,4,5]
var left=0;
var right=arr.length-1;
while(left<right)
{
    var temp = arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    left++;
    right--;
}
console.log(arr)