/* debug */
function decimal2Binary(dec)
{
	var bin = 0
	var p = 1
	while(dec > 0)
	{
		bin = bin + (dec % 2) * p
		dec = Math.floor(dec/2)
		p = p * 10
	}
	return bin;
}

// console.log(decimal2Binary(13))

/* object */
function lookUpProfile(name, property)
{
	for(var i = 0; i < contacts.length; i++)
	{
		if(contacts[i]["firstName"] == name)
		{
			if(contacts[i][property] != undefined)
				console.log(contacts[i][property])
			else
				console.log("No such property")
			return;
		}
	}

	console.log("No such contact")
}

var contacts = [
    {
        "firstName": "Abhishekh",
        "lastName": "Kumar",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// console.log(lookUpProfile("Abhishekh", "likes"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Abhishekh", "address"));

/* Arrays */
