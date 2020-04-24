var tasks = document.querySelector("#tasks");
var input = document.querySelector("input")[0];
var button = document.querySelector("button")[0];

var counter = 1;
button.addEventListener("click", addTask);

function addTask(){
    var li = document.createElement("li");
    li.innerHTML = `$(input.value) <button type="button" clase="close" aria-label="Close">
                    <span aria-hidden="true"> &times; </span> </button>`;
    li.setAttribute("num", counter);
    li.style.listStyle = "none";
    tasks.appendChild(li);

    var spans = document.querySelector("span");
    for(var i = 0; i < spans.length; i++){
        if(spans[i].parentElement.parentElement.getAttribute("num") == counter)
            spans[i].addEventListener("click", removeMe);
    }
    counter++;
}

function removeMe(event){
    console.log(event.target);
    var ul = event.target.parentElement.parentElement.parentElement;
    var li = event.target.parentElement.parentElement;
    ul.removeChild(li);
}