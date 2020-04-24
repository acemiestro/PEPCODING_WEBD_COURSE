// "/homepage", "", "/"
// "/product" -> product page
// "/api" -> api -> display data.json
// Else Error 404
var http = require("http")
var fs = require("fs")
var url = require("url")

var home = fs.readFileSync("nodefarm.html")
var json = fs.readFileSync("data.json")
var product = fs.readFileSync("product.html")
var template = fs.readFileSync("product.html")

template = template + ""
product = product + ""


function replace(product, template)
{
	template = template.replace(/#image#/g, product["image"])
	template = template.replace(/#ProductName#/g, product["productName"])
	template = template.replace(/#from#/g, product["from"])
	template = template.replace(/#nutrients#/g, product["nutrients"])
	template = template.replace(/#quantity#/g, product["quantity"])
	template = template.replace(/#price#/g, product["price"])
	template = template.replace(/#description#/g, product["description"])
	return template
}

var server = http.createServer(function(req, resp)
{
	//console.log(url.parse(req.url,true).query.id);
	var Url = url.parse(req.url,true);
	var id = Url.query.id;
	var pathname = Url.pathname
	console.log(id)
    if(req.url == "/" || req.url == "" || req.url == "/homepage")
	{
		resp.write(home)
        // resp.end("<h1><i>Home Page</i></h1>");
    }
	else if(req.url == "/api")
	{
		resp.write(json);		
	}
	else if(pathname == "/product")
	{
		json = JSON.parse(json)
		var productPage = replace(json[id], template)
		resp.write(productPage);
	}
    else 
	{
        resp.end("<h1><strong>ERROR 404! Page  not found</strong></h1>");
    }
    resp.end();
});

server.listen(3001, function()
{
    console.log("Server has started on port 3001");
});
