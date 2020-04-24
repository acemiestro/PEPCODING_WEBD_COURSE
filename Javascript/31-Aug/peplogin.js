var pepuser={
    name:"Vasu Goel",
    loginOK:function(){
        console.log(this.name+" logged in");
    },
    loginFail:function(){
        console.log(this.name+" login Failed");
    },
}
function askPassword(password,loginOK,loginFail){
    var that=this;
    if(password=="pep")
    {
        loginOK();
    }
    else {
        loginFail();
    }
}
askPassword("pp",pepuser.loginOK.bind(pepuser),pepuser.loginFail.bind(pepuser));//bind is used because askPassword is a method 
                                                                                  //function and we are calling it in a 
                                                                                //global this,hence it is not able to get name value
 