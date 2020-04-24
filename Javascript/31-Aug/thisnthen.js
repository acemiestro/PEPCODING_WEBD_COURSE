var c={
    name:"c object",
    log:function(){
        this.name="Updated C object";
        var that=this;
        function setName(newName){
            
            that.name=newName;
        }
        setName("Updated Against C Object");
    }
};
c.log();
console.log(c.name);
//console.log(name);