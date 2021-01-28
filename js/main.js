window.onload = function(){
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
    
}