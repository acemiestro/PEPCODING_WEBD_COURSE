function downloadFile(url)
{
    console.log("Downloading file from: " + url);
    var path = "C:\\Downloads\\";
    var splt = url.split("/")[1];
	var img = url.split("/").pop()
	var dimgpath = path + img
	
	return new Promise(function(resolve, reject)
	{
		setTimeout(function()
		{
			resolve(dimgpath)
		},3000)
	})
}

function compressFile(dimgpath)
{
    console.log("Compressing: " + dimgpath);
    var ext = dimgpath.split(".").pop()
	var cPath = dimgpath.split(".").shift()
	// console.log(ext)
	// console.log(cPath)
	var cImg = cPath + "-resized." + ext
	
	return new Promise(function(resolve, reject)
	{
		setTimeout(function()
		{
			resolve(cImg)
		},3000)
	})
}

function uploadFile(cImg)
{
	var upath = "http://pep/uploads"
	var toupload = cImg.split("\\").pop()
	var uploadedImg = upath + "/" + toupload
    return new Promise(function(resolve, reject)
	{
		setTimeout(function()
		{
			resolve(uploadedImg)
		},3000)
	})
}

async function main()
{
	var dP = await downloadFile("http://google.com/logo.png") 
	var dC = await compressFile(dP)
	var dU = await uploadFile(dC)
	
	console.log(dP)
	console.log(dC)
	console.log(dU)
}

main()