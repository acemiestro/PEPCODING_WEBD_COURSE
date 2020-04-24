var ok = true
function giveBurger()
{
	return new Promise(function(resolve, reject)
	{
		if(ok)
			resolve("Cheese burger")
		
		else
			reject("No burgers are available :(")
	})
}

var promise = giveBurger()

promise
	.then(function(burger)
	{
		console.log(burger)
		console.log("Share")
	})
	.catch(function(err)
	{
		console.log(err)
		console.log("Let's go subway")
	})

// keywords
// Promise, new, resolve, reject, then, catch