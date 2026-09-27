window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // alert("Portfolio loaded")
    buttons = document.getElementsByClassName("portfolio-button");
    for(i of buttons){
        i.addEventListener("click", clickHandler)
    }
}

function clickHandler(event){
    descs = document.getElementsByClassName("portfolio-desc");
    pics = document.getElementsByClassName("portfolio-img");
    // for(i of descs){
    //     i.style.fontSize = "0px";
    // }
    description = document.getElementById(event.target.id + "-desc");
    pic = document.getElementById(event.target.id + "-image");
    if(description.style.fontSize != "0px"){
        description.style.fontSize = "0px";
        pic.style.width = "0px";
    }
    else{
        description.style.fontSize="1em";
        pic.style.width = "500px";
    }
}


// I want to add an event listener to the buttons that makes it so the list expands when the item is pressed