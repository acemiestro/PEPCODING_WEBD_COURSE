function downloadFile(url, downloaded)
{
    console.log("Downloading file from: " + url);
    var path = "C:\\Downloads\\";
    var splt = url.split("/")[1];
	// console.log(splt)
	var img = url.split("/").pop()
	var dimgpath = path + img
    setTimeout(function()
	{
        downloaded(dimgpath)
    },3000)
}

function compressFile(dimgpath, compressed)
{
    console.log("Compressing: " + dimgpath);
    var ext = dimgpath.split(".").pop()
	var cPath = dimgpath.split(".").shift()
	// console.log(ext)
	// console.log(cPath)
	var cImg = cPath + "-resized." + ext
    setTimeout(function()
	{
        compressed(cImg)
    },3000)
}

function uploadFile(cImg, uploaded)
{
	var upath = "http://pep/uploads"
	// C:\Downloads\logo-resized.png
    var toupload = cImg.split("\\").pop()
	var uploadedImg = upath + "/" + toupload
    setTimeout(function()
	{
        uploaded(uploadedImg)
    },3000)
}


// calls
downloadFile("http://google.com/logo.png", function downloaded(dimgpath)
{
	console.log("File downloaded at " + dimgpath)
	compressFile(dimgpath, function compressed(cImg)
	{
		console.log("File compressed to: " + cImg)
		uploadFile(cImg, function uploaded(uploadedImg)
		{
			console.log("File succesfully uploaded to: " + uploadedImg)
		})
	})
})