// event emitter 
// event listner/ handler
// listner -> .on("", cb()) -> calls code
// emitter -> .emit("", a, b) -> specifies "" name for .on("")

var event = require("events")
var myEmitter = new event()

myEmitter.on("myevent", function()
{
	console.log("Event has occured")
})

myEmitter.on("myevent", function(a, b)
{
	console.log("Sum = " + a + b)
})

myEmitter.emit("myevent", 4, 5)