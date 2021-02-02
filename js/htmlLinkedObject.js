window.onload = function(){

    const Magazin = {
        jeuxVideo: {
            nomRayon: "JeuVideo"
        },
        alimentaire: {
            nomRayon: "alimentaire"
        },
        fruitEtLegumes: {
            nomRayon: "fruits&Legumes"
        },
        affairesPourEnfant: {
            nomRayon: "affaire pour enfant"
        }

    }

    function createHtmlElement(tag, options = Object.assign({className: "", id: ""}, {})){
        const {id, className} = options;
        const htmlElement = document.createElement(tag);
        if((id.length !== 0 && id.trim() !== "") || className.length !== 0){
            htmlElement.setAttribute("id", options.id);
            htmlElement.setAttribute("class", Array.isArray(options.className) ? options.className.join(' ') : options.className)
        }

        return htmlElement;
    }

    function appendElementToDom(elementHtml, options = Object.assign({className: "", id: ""},{}) ,callback){
        const { id } = options
        const div = createHtmlElement(elementHtml, options);
        document.body.appendChild(div);

        const elementCreatedGetFromTheDom = document.querySelector(`#${id}`);

        callback(elementCreatedGetFromTheDom);
    }

    const valuesObject = Object.values(Magazin);
    Array(4).fill(null).forEach((__, index) => {
        let obj = valuesObject.pop()
        appendElementToDom("div", {className: "square", id: `card${index+1}`} , function(elementAppended) {
            elementAppended.onclick = function(){
                console.log(obj);
            }
        });
    });




}