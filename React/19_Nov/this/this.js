"use strict"
// name="varun";
// nodeJS
// console.log(this);
function myfn() {
  console.log(this === global);
}
const cap = {
  name: "Steve",
  getName: ()=> {
    console.log(this);
    // const that=this
    innerfn=()=>{
    //   // console.log(that===cap);
    //   console.log(that.name);
    console.log(this);
    }
    innerfn();
  }
};
cap.getName();
// global
// myfn();
// object
