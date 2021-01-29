window.onload = function(){
    // Récupérer de différentes façons les élements HTML
    // Avant
    var p = document.getElementsByTagName('p');
    var div = document.getElementsByTagName('div');
    var greenP = document.getElementById('green');
    var p1 = document.getElementsByClassName('p1');
    console.log("greenP: ",greenP, "div: ", div, "all paragraph: ", p, "p1: ", p1);
    // Aujourd'hui
    var pWithQuerySelectorByTagName = document.querySelector('p');
    var pWithQuerySelectorById = document.querySelector('#green');
    var pWithQuerySelectorByClassName =  document.querySelector('.p1');
    console.log("pWithQuerySelector: ", pWithQuerySelectorByTagName); 
    console.log("pWithQuerySelectorById: ", pWithQuerySelectorById);
    console.log("pWithQuerySelectorByClassName: ", pWithQuerySelectorByClassName);
    
    // Pour pouvoir récupérer plusieurs éléments avec querySelector
    // Il faut utiliser querySelectorAll()
    var getAllParagrapheWithQuerySelectorAll = document.querySelectorAll('p');
    console.log("getAllParagrapheWithQuerySelectorAll: ", getAllParagrapheWithQuerySelectorAll)

    // Les types de valeurs que peut prendre une variable en javascript
    var a = 1;
    var b = "";
    var c = [1, "", {}, function(){}, false, true];
    var d = {
        color: "red",
        number: 1,
        tableau: [],
        obj: {},
        func: function(){},
        bool1: true,
        bool2: false
    };

    console.log("type property", typeof d.color,"property color: ", d.color);
    console.log("type property", typeof d.number,"property number: ", d.number);
    console.log("type property", typeof d.tableau,"property tableau: ", d.tableau);
    console.log("type property", typeof d.obj,"property obj: ", d.obj);
    console.log("type property", typeof d.func,"property func: ", d.func);
    console.log("type property", typeof d.bool1,"property bool1", d.bool1);
    console.log("type property", typeof d.bool2, "property bool2", d.bool2);

    var e = function(){};
    var f = true || false;

    // Les boucles
        // Boucle for fonctionnement :, 
        for(var i = 0; i <= 10; i = i + 1){
            console.log("boucle for: ",i)
        }
    
        // Boucle While
        var j = 0;
        while(j <= 10){
            console.log("boucle while: ", j);
            j = j + 1;
        }
    
        // Les tableaux
        var tableau = ["Hello", "World !"];
        console.log("value tableau 0",tableau[0]);
        console.log("value tableau 1",tableau[1]);

        // mise en pratique tableau + boucle pour parcourir notre tableau

        for(k = 0; k < 2; k = k + 1){
            console.log('boucle + tableau :', 'indice: ', k, "valeur: ", tableau[k]);
        }

        // Ou bien on peut itérer dans un tableau avec la boucle du dessous

        var tableau2 = ["foo", "bar", "foo", "baz"];
        for(var item of tableau2){
            console.log("item tableau: ", item);
        }

        // Boucle pour itérer dans un objet(collection, dictionnaire)
        var monObj = {
            foo: "bar",
            hello: "world",
            age: 30
        }

        for(var keyObject in monObj){
            console.log("key: ",keyObject, "value: ", monObj[keyObject]);
        }

        var tableau3 = [];
        // Comment ajouter dans un tableau ?
        console.log("Le tableau quand il est vide: ", tableau3);
        tableau3[0] = "tomate";
        console.log("Le tableau aprés un ajout: ", tableau3);
        console.log(tableau3[0]);
    
        // Ajoute à la fin du tableau
        tableau3.push("banane");
        console.log("Ajoute banane à la fin du tableau: ",tableau3[1]);
        
        // Ajoute au début du tableau
        tableau3.unshift("poire");
        console.log("Ajoute poire au debut du tableau: ", tableau3);
    
        // supprimer le dernière élément d'un tableau
        tableau3.pop();
        console.log("la méthode pop supprime banane à la fin du tableau : ", tableau3);
    
        // supprimer le première élément d'un tableau
        tableau3.shift();
        console.log("la méthode shift supprime poire au début du tableau: ", tableau3);

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
        console.log('nombreString: ', typeof nombreString);

        // Convertir un nombre en chaine de caractère
        var reConvertNombreNumberToString = nombreNumber.toString()
        console.log("type: ", typeof reConvertNombreNumberToString, "value: ", reConvertNombreNumberToString);

       // Intéraction avec le DOM ( Document Object Model )
        // Création des éléments
        var createDivElement = document.createElement('section');
        // Assigner des attributs à notre élément div
        createDivElement.setAttribute('class', 'square');

        var createP = document.createElement('p');
        // Assigner un attribut à notre élément p
        createP.setAttribute('class', 'color');
        console.log('createP: ', createP);
        
        // Assigner un texte à notre paragraphe
        createP.innerText = "Hello World !";
        console.log('createDivElement: ', createDivElement);

        // Ajouter un élément enfant à notre div
        createDivElement.appendChild(createP);
        console.log(createDivElement);

        // Afficher l'élement dans notre page html
        var body = document.querySelector('body');
        body.appendChild(createDivElement);

        // Event Listener
        var div1 = document.querySelector('#div1');
        console.log(div1);

        // div1.addEventListener("click", function(event){
        //     alert('votre element à été cliqué');
        //     console.log(event);
        // });


        div1.onclick = function(){
            alert("cliquer !")
        }

        console.log(div1);

        div1.onmouseover = function(){
            alert("Votre souris à suvoler l'élément")
        }

        div1.onmouseout = function(){
            alert("Votre souris n'est plus sur l'élément !")
        }


        // Récupérer mon deuxième élément pour le rendre cliquable
        var div2 = document.querySelector('#div2');
        console.log(div2);

        div2.addEventListener("click", function(){
            alert("élément désormais cliquable ! :)");
        });

        // Le mot clés this
         var div1 = document.querySelector('#div1')

         div1.addEventListener('click', function(){
            console.log(this);
         });

        // function callback

        function faireCrepe(quantityOeuf, quantityFarine, quantityLait, callback){
            console.log("ingrédient recette: ", "," , quantityOeuf, "," ,quantityFarine ,",", quantityLait);
            callback("crêpe cuite !");
        }

        faireCrepe("2", "4", "1", function(resultatCrepe){
            console.log(resultatCrepe);
        });

        // Les function import/export avant d'importer une fonction il faut qu'elle soit au préalable exporter dans le fichier en question
        // Allez voir le fichier module-function.js pour voir comment exporter un élément
        import { helloWorldConsole, helloWorldDom, createElementDom } from './module-function.js';
        var body = document.querySelector('body');
        helloWorldConsole("Myhed");
        var pElement = helloWorldDom("Myhed");
        body.appendChild(pElement);
        createElementDom("p", body, "toto");

        // Ancienne Méthode pour créer une class
    
        function Personnage(nom, prenom, age){
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
            this.crier = function(){
                console.log('crier')
            }
        }

        // Mon premier personnage

        var personnage = new Personnage("Ben Rhouma", "Myhed", "24");
    
        // On créer via le prototype une fonction qui peut être ré-érite selon l'objet utiliser
         Personnage.prototype.avancer = function() {
            console.log("Votre personnage avance...");
        }

        // On appelle la fonction personnage avancer
        console.log(personnage.avancer())

        // On créer notre deuxième objet Personnage
        var personnage2 = new Personnage("toto", "titi","25");

        console.log(personnage2)

        // On ré-écrit la fonction avancer de ce personnage
        Personnage.prototype.avancer = function(){
            console.log("toto");
        }

        console.log(personnage2.avancer())

        var personnage3 = new Personnage("toto", "titi", 26);
        var personnage4 = new Personnage("foo", "bar", 21);

        // On peut aussi stocker nos class dans un objet
        var allPersonnage = {
            personnage1,
            personnage2
        }
        // appeler les divers propriété de nos différente class dans notre objet
        console.log(allPersonnage.personnage1.age);
        console.log(allPersonnage.personnage2.age);

        // Nouvelle méthode de faire des class en javascript
        class Personnage {
            // Les méthodes et les propriétés préfixer d'un underscore sont des éléments dit privé
            constructor(nom, prenom, age, addresse){
                this._nom = nom; // privé
                this._prenom = prenom; // privé
                this._age = age; // privé
                this._membreGroupe = true; // privé
                this.addresse = addresse // public
            }

            get prenomProperty(){ // permet de récupérer la propriété prenom
                return this.prenom
            }

            get nomProperty(){ // permet de récupérer la propriété nom
                return this.nom;
            }

            get ageProperty(){ // permet de récupérer la propriété age
                return this.age
            }

            get membreGroupeProperty(){ // permet de récupérer la propriété membreGroupe
                return this.membreGroupe;
            }

            set changePrenomProperty(prenom){ // permet de changer la propriété prenom
                this.prenom = prenom;
            }
            
            set changeNomProperty(nom){ // permet de changer la propriété nom
                this.nom = nom;
            }

            set changeAgeProperty(age){ // permet de changer la propriété age
                this.age = age;
            }

            set changeMembreGroupeProperty(membreGroupe){ // permet de changer la propriété membreGroupe
                this.membreGroupe = membreGroupe;
            }

            _sayHelloWorld(){ // méthode priver préfixer d'un underscore
                console.log('Hello World !')
            }

            helper(){ // peut être utiliser depuis une instance de la class donc à l'extérieur de celle-ci
                this._sayHelloWorld(); 
                // La fonction _sayHelloWorld ne peut être utilisé que à l'intérieur de class parce qu'elle est privé
            }

        }

        var personnage1 = new Personnage(["toto"], "titi", 23);

        // getter
        console.log(personnage1.prenomProperty);
        console.log(personnage1.nomProperty);
        console.log(personnage1.ageProperty);
        console.log(personnage1.membreGroupeProperty);

        // setter
        personnage1.changePrenomProperty = "tata"
        console.log(personnage1.prenomProperty);

        // change membreGroupe Property

        personnage1.changeMembreGroupeProperty = false;
        console.log(personnage1.changeMembreGroupeProperty);
    
        // Introduction aux différentes fonctionnalités de l'es6 (ECMASCRIPT 2016)
            // Ne plus utiliser le mot clés var mais plûtot utiliser let, const
        let x = 0;
        const a = 2;

        x = 3;

        // Arrow Function syntaxe ES6 (ECMASCRIPT 2016)
        const functionEs6_1 = () => "toto"; // Arrow Function oneline
        const functionEs6_2 = () => {  // Arrow Function with return
            return "toto"
        }

        console.log("functionEs6_2 oneline function without return key: ",functionEs6_1());
        console.log("functionEs6_2 with return key: ",functionEs6_2());

        const div1 = document.querySelector('#div1');

        div1.addEventListener('click', (event) => { // addEventListener with Arrow Function

        });
        
        // Comment faire un for dans le nouveau javascript ?
        // ne plus utiliser de for mais la syntaxe du dessous
        const array = ['toto', 'tata', 'titi', 1, 2];
        Array(3).fill("abc").forEach(function(__, i){ // function forEach ne retourne strictement rien
            // forEach prend deux paramètre qui est l'item courant du tableau ainsi que son indice
            // lorsqu'on a pas besoin d'utiliser le premier paramètre alors on utilise deux underscores pour faire comprendre aux 
            // développeur qu'on utilisera ce paramètre
            console.log(i);
        });

        // parcourir mon tableau avec un forEach
        array.forEach((itemCourant, index) => {
            console.log("itemCourant: ", itemCourant);
            console.log('index: ', index);
        });

        // For qui retourne un tableau d'élément
        const newArray1 = Array(array.length).fill("abc").map(function(item, index){ 
            // La fonction map comparer au forEach retourne un tableau de même taille mais modifié
            return item + "d";
        });

        /* Il y'a plusieurs paradigm
          * Paradigme procédural
          * Paradigme Object
          * Paradigme fonctionnelle
        */
        // for oneline qui retourne un tableau d'élément cela s'appelle un paradigme fonctionnelle
        const newArray2 = Array(array.length).fill("abc").map((item, index) => item + "d"); // function oneline avec arrow function

        const newArray3 = Array(array.length).fill("abc").map(item => item + "d"); // function oneline avec arrow function avec supression des paramètre qu'on a pas besoin

        console.log(newArray1);

        const newArray4 = array.filter((__, i) => {
            return Number.isInteger(array[i]);
        });

        const newArray5 = array.filter((__, i) => Number.isInteger(array[i]));

        console.log("newArray5: ", newArray5);

        // Comment itérer dans un objet avec le nouveau javascript
        const monObjet = {
            key1: "foo",
            key2: "bar",
            key3: "foobar"
        }

        // Ancienne méthode pour parcourir un objet
        for(var key in monObjet){
            console.log(monObjet[key]);
        }

        // Récupères les clés d'un objet
        Object.keys(monObjet).forEach(key => {
            console.log("key: ", key, "values: ", monObjet[key]);
        });
        // Récupères les valeurs d'un objet
        Object.values(monObjet).forEach(values => {
            console.log("values: ", values);
        });
    
}