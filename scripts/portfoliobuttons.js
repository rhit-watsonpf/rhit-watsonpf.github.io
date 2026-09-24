window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // alert("Portfolio loaded")
    buttons = document.getElementsByClassName("portfolio-button");
    for(i of buttons){
        i.addEventListener("click", clickHandler)
    }
}

function clickHandler(event){
    descs = document.getElementsByClassName("portfolio-desc")
    // for(i of descs){
    //     i.style.fontSize = "0px";
    // }
    description = document.getElementById(event.target.id + "-desc");
    if(description.style.fontSize == "1em"){
        // console.log("We should close now");
        description.style.fontSize = "0px";
    }
    else{
        description.style.fontSize="1em";
    }
    // console.log(description.style.fontSize)
}


// I want to add an event listener to the buttons that makes it so the list expands when the item is pressed