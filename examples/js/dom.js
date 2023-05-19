// let variable = variableValue;
let page = document.getElementById("page");
page.style.backgroundColor = "plum";
page.style.color = "white"
 
let heading = document.getElementById("heading");
heading.style.fontSize = "60";
heading.innerHTML = "<i>Hello<i> World!";

let mode = "dark";
function display Mode() {
    if (mode == "dark") {
        page.style.backgroundColor = "#222222"
        page.style.color = "DDDDDD"
    } else if (mode == "light") {
        page.style.backgroundColor = "#DDDDDD"
        page.style.backgroundColor = "#222222"
    } else {
        page.style.backgroundColor = "red"
        page.style.color = "yellow"
}
}

displarMode();

let toggleButton = document.getElementById("toggleButton");

function toggleMode() {
    if (mode == "dark") {
        mode = "light";
    } else if (mode == "light") {

    }
    displayMode();
}
toggleButton.onclick = toggleMode;
