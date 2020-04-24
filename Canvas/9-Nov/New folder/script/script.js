var isDown = false;
board.addEventListener("mousedown", function(event){
    var x = event.clientX;
    var y = event.clientY;
    ctx.beginPath();
    ctx.moveTo(x, y);
    isDown = true;
});

board.addEventListener("mousemove", function(event){
    if(!isDown)
        return;
    var x = event.clientX;
    var y = event.clientY;
    ctx.lineTo(x, y);
    ctx.stroke();
});

board.addEventListener("mouseup", function(event){
    isDown = false;
    ctx.closePath();
    var {x, y} = getLocation(event);
});

function getLocation(event){
    return{
        x: board.getBoundingClientRect().left-event.clientX;
        y: board.getBoundingClientRect().top-event.clientY;
    }
}