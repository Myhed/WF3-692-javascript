export function helloWorldConsole(nom){
    console.log("Hello World " + nom);
}

export function helloWorldDom(nom){
    var pElementHtml =  document.createElement("p");
    pElementHtml.innerText = "Hello World " + nom;

    return pElementHtml;
}

export function createElementDom(tagElement, parentHtml, text){
    var elementHtml = document.createElement(tagElement);
    if(tagElement === "p" && typeof text !== "undefined"){
        elementHtml.innerText = text;
    }
    parentHtml.appendChild(elementHtml);
}