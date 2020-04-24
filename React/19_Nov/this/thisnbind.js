let cap = {
  name: "Steve",
  getName: function() {
    console.log(this);
    // const that=this;
  }
};
var mygetName=cap.getName.bind(cap);
// cap=null;
mygetName();


