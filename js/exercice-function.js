window.onload = function(){
    // Exo 1
    
    // function createElementHtml(element){
    //     var htmlElement = document.createElement(element);
    //     console.log(htmlElement);
    //     return htmlElement
    // }
    
    // createElementHtml('p');

    // Exo 2

    // function createElementHtml(tagElements){
    //     var body = document.querySelector('body');
    //     for(var tagElementHtml of tagElements){
    //         var htmlElement = document.createElement(tagElementHtml);
    //         body.appendChild(htmlElement);
    //     }
    // }

    //createElementHtml(["p", "div", "span", "section"])

    // Exo 3
    function createElementHtml(tagElement, attributs){
        var body = document.querySelector('body');
        for(var key in attributs){
            var htmlElement = document.createElement(tagElement)
            for(attribut in attributs[key]){
                htmlElement.setAttribute(attribut,attributs[key][attribut]);
            }
            body.appendChild(htmlElement)
        }
    }

    function createChild(target, childTagElement, paragraphes){
        var targetsHtml = document.querySelectorAll(target);
        for(var i = 0; i < paragraphes.length; i++){
            var htmlElement = document.createElement(childTagElement);
            htmlElement.innerText = paragraphes[i];
            targetsHtml[i].appendChild(htmlElement)
        }
    }

    
    
    var obj = {
        firstElement: {
            id: "div1",
            class: "square paragraphe1 color1"
        },
        secondElement: {
            id: "div2",
            class: "square paragraphe2 color2"
        },
        thirdElement: {
            id: "div3",
            class: "square paragraphe3 color3"
        }
    }
    
    createElementHtml("div", obj)
    createChild("div", "p", ["premier p", "deuxième p", "troisième p"]);

}