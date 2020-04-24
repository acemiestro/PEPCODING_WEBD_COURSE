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

async function main()
{
	var p1 = await getFile("file1")
	var p2 = await getFile("file2")
	var p3 = await getFile("file3")
	
	console.log(p1)
	console.log(p2)
	console.log(p3)
}

main()