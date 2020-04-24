function downloadFile(url) {
  console.log("Downloading file from  " + url);
  var path = "C:\\Downloads\\";
  // var split = url.split("/");
  // console.log(split);
  var img = url.split("/").pop();
  var dimgPath = path + img;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(dimgPath);
    }, 3000);
  });
}

function compressFile(dimgPath) {
  console.log("We are compressing: " + dimgPath);
  var ext = dimgPath.split(".").pop(); //.jpg
  var cPath = dimgPath.split(".").shift(); //
  // console.log(ext);
  // console.log(cPath);
  var cImg = cPath + "-resized." + ext;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(cImg);
    }, 3000);
  });
}

// upload file
function uploadFile(cImg) {
  var upath = "http://pep/uploads";
  //  C:\Downloads\logo-resized.png
  var toupload = cImg.split("\\").pop();
  var uploadedImg = upath + "/" + toupload;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(uploadedImg);
    }, 3000);
  });
}
// calls
var arr = [
  "http://google/logo.png",
  "http://google/banner.png",
  "http://google/promo.png"
];
// Pomise.all => array Promises input


async function main()
{
	var dP = await Promise.all(arr.map(downloadFile))
	var dC = await Promise.all(dP.map(compressFile))
	var dU = await Promise.all(dC.map(uploadFile))
	
	for(var i = 0; i < dP.length; i++)
		console.log(dP[i]);	
	
	for(var i = 0; i < dU.length; i++)
		console.log(dU[i]);
}

main()