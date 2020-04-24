var cap={
    name:"I am a Object",
    getThis:function(){
        console.log("Object");
        console.log(this);
    }
    };
function fhnThis(){
    console.log("Function");
    //global object
    console.log(this==global);
}
console.log("Global");
console.log(this);//empty
//function call => global object
fhnThis();//fnThis
// method call =>object that has been passed
cap.getThis();//cap
