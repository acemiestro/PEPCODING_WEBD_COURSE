var ajax = require("./lib/fileDownload");

function getFile(file)
{
	return new Promise(function(resolve, reject)
	{
		ajax.fakeAjax(file, function(data)
		{
			resolve("Incoming " + file + " " + data)
		})
	})
}

function main()
{
	var p1 = getFile("file1")
	var p2 = getFile("file2")
	var p3 = getFile("file3")
	
	p1.then(function(data)
	{
		console.log(data)
		return p2
	})
	.then(function(data)
	{
		console.log(data)
		return p3
	})
	.then(function(data)
	{
		console.log(data)
	})
}

main()