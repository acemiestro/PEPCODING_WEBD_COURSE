var arr = [
	"",
	"",
	"",
]

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

for(var i = 0; i < 3; i++)
{
	var dP = downloadFile(arr[i])
	var dC = dP.then(function(dimgpath){
		console.log("File downloaded at " + dimgpath)
		return compressFile(dimgpath)
	})
	var dU = dC.then(function (cImg){
		console.log("File compressed to: " + cImg)
		return uploadFile(cImg)
	})
	dU.then(function (uploadedImg){
		console.log("File succesfully uploaded to: " + uploadedImg)
	})
}
