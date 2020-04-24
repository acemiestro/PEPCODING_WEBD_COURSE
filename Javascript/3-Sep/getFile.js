var ajax = require("./lib/fileDownload");
var files = ["file1", "file2", "file3"];
var tracker = {}

function getFile(file)
{
	ajax.fakeAjax(file, function(data)
	{
		console.log("Incoming " + file + " " + data)
		recieved(file, data)
	})
}

function recieved(file, data)
{
	if(tracker[file] == undefined)
		tracker[file] = data;

	for(var i = 0; i < files.length; i++)
	{
		if(tracker[files[i]] != undefined)
		{
			if(tracker[files[i]] != true)
			{
				console.log(tracker[files[i]])
				tracker[files[i]] = true
			}
		}
		else
			return
	}
}

function main()
{
	getFile("file1")
	getFile("file2")
	getFile("file3")
}

main()