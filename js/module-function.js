function helloWorldConsole(nom){
    console.log("Hello World " + nom);
}

function helloWorldDom(nom){
    var pElementHtml =  document.createElement("p");
    pElementHtml.innerText = "Hello World " + nom;

    return pElementHtml;
}

function createElementDom(tagElement, parentHtml, text){
    var elementHtml = document.createElement(tagElement);
    if(tagElement === "p" && typeof text !== "undefined"){
        elementHtml.innerText = text;
    }
    parentHtml.appendChild(elementHtml);
}

var monObj = {};
var maVariable = "toto";

export { monObj, maVariable, createElementDom, helloWorldDom, helloWorldConsole }