var ladder={
    step:0,
    up:function(){
        this.step+=1;
        return this;
    },
    down:function(){
        this.step-=1;
        return this;
    },
    showsStep:function(){
        console.log(this.step);
    }
    }
 ladder.up().up().down().down().up().showsStep();