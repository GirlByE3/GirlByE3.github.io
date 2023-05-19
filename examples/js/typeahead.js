let typeahead = document.getElementById("typeahead")

let typeaheadContent = [
    "",
    "H",
    "HE",
    "HEL",
    "HELL",
    "HELLO",
    "HELLO W",
    "HELLO WO",
    "HELLO WOR",
    "HELLO WORL",
    "HELLO WORLD",
    "HELLO WORL",
    "HELLO WOR",
    "HELLO WO",
    "HELLO W",
    "HELLO ",
    "HELLO",
    "HELL",
    "HEL",
    "HE",
    "H",
    "",
];

// let typeaheadContent = [

// ];

let typeaheadIndex = 0;

function displayTypeAhead() {
    let currentString = typeAaheadContent[typeaheadIndex];

    typeahead.innerHTML = currentString;
    
    typeaheadIndex++;
    if(typeaheadIndex >= typeaheadContent.length) {
    typeaheadIndex = 0;
    }
}

setInterval(displayTypeAhead, 100)