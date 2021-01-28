function sayHelloWorld(string){
    console.log('hello world !');
}

sayHelloWorld("string");

console.log(sayHelloWorld)

var maFonctionAnnonyme = function(string){}

console.log(maFonctionAnnonyme("string"))

// (function(){
//     console.log('toto')
// })()

var createElement = function(balise){
    console.log(document.createElement(balise));
}

createElement('p');

