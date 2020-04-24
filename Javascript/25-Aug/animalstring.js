var animals = ['Hen','Cow','Elephant','Lion']
function firstChar(name)
{
    return name.charAt(0);
}
var res = animals.map(firstChar);
console.log(res);
