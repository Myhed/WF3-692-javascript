window.onload = function(){
    // Les fonctions
    function sayHelloWorld(){
        var x = "helloWorld";
        return x;
    }
    // lancer la fonction nommer
    var monResultat = sayHelloWorld();
    console.log("function nommer: ", monResultat);
    
    var maVariableFunction = function(){
        return "Hello World!";
    }
    // Lancer la fonction annonyme
    var  monResultat2 = maVariableFunction();
    var monResultat3 = maVariableFunction();
    console.log("function annonyme: ", monResultat2);
    console.log("function annonyme: ", monResultat3);

    function faireCrepe(quantityOeuf, quantityFarine, quantityLait){
        console.log("ingrédient recette: ", "," , quantityOeuf, "," ,quantityFarine ,",", quantityLait);
    }
    // appelation la fonction faireCrepe avec une chaine de caractère en paramètre
    faireCrepe("3", "4 kg", "2 brique"); 
    // appelation de faireCrepe avec des nombres en parametre
    faireCrepe(3, 4, 2);       
    // appelation de faireCrepe avec des objets en parametre
    faireCrepe({
        quantite: 3
    }, {
        qauntite: 4
    }, {
        quantite: 2
    });
    // appelation de faireCrepe avec des tableau
    faireCrepe([3], [4], [2]); 

    // Convertir une chaine de caractère en nombre
    var nombreString = "10";

    console.log("type: ",typeof nombreString, "value: ", nombreString);

    var nombreNumber = parseInt(nombreString, 10);
    
    console.log("type: ",typeof nombreNumber, "value: ", nombreNumber);

    // nombreString reste une chaine de caractère, elle n'a pas changé.
    console.log('nombreString: ', typeof nombreString)

    // Convertir un nombre en chaine de caractère
    var reConvertNombreNumberToString = nombreNumber.toString()
    console.log("type: ", typeof reConvertNombreNumberToString, "value: ", reConvertNombreNumberToString);

}