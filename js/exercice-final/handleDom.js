export function createElementHtml(tagElement, options = Object.assign({}, {id: "", className: [], child: 'img'})){
    //    console.log(options)
    const [keyId, keyClass, child] = Object.keys(options);
    const htmlElement = document.createElement(tagElement);
    let childHtmlElement;
    if(typeof child !== "undefined"){
        childHtmlElement = document.createElement(options[child]);
        if(options[child] === "img"){
            childHtmlElement.setAttribute('src', "");
        }
    }
    const optionsClassIsArray = Array.isArray(options[keyClass]);
    if(options[keyId].trim().length !== 0){
        htmlElement.setAttribute(keyId, options[keyId]);
    }
    if(options[keyClass].length !== 0){
        htmlElement.setAttribute(keyClass.split('N')[0], optionsClassIsArray ? options[keyClass].join(" "): options[keyClass]);
    }
    if(typeof childHtmlElement !== "undefined"){
        htmlElement.appendChild(childHtmlElement);
    }
    return htmlElement;
}

export function createImageHtml(){
    const img = document.createElement('img');
    img.setAttribute('src', '');

    return img;
}

export function appendToDom(parent, howMany = 1 , callback, optionsChild = Object.assign({}, {id: "", className: []}), childToCreate){
    let optionsId;
    if( typeof optionsChild["id"] !== "undefined" && optionsChild["id"].trim().length !== 0){
        optionsId = optionsChild["id"];
    }
    Array(howMany).fill(null).forEach((item, index) => {
        optionsChild["id"] = optionsId ? optionsId + (index+1): "";
        const htmlElement = childToCreate ? createElementHtml(childToCreate, optionsChild) : createImageHtml()
        callback(htmlElement, index);
        document[parent].appendChild(htmlElement);
    });
}