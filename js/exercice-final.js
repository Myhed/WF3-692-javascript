window.onload = function(){
    // Lien à utiliser
    const defaultLinkCard = 'https://via.placeholder.com/';
    const defaultText = "MisteryCard";

    let textCard = "?text=";
    let widthCard = "175"; 
    let firstRandomIndex = 0;
    let secondRandomIndex = 0;
    const colorCards = [];
    const nameCards = ["As","roi","dame","valet"];
    const typeCartes = ["Trefle", "Carreau", "Coeur", "Pique"];
    const cardWithName = [];
    const cardWithType = [];

    for(let v = 0; v < typeCartes.length; v++){
        cardWithName[v] = [];
        for(h = 0; h < nameCards.length; h++){
            cardWithName[v][h] = typeCartes[v] + ' ' + nameCards[h];
        }
    }

    for(let x = 0; x < typeCartes.length; x++){
        cardWithType[x] = [];
        for(m = 2; m <= 10; m++){
            cardWithType[x][m-2] = typeCartes[x] + ' ' + m
        }
    }

    for(let j = 0; j < 51; j++){
        colorCards[j] = "";
        for(let k = 0; k < 5; k++){
            colorCards[j] += (Math.floor(Math.random() * 16)).toString(16);
        }
    }
    console.log('cardWithName: ', cardWithName);
    console.log('cardWithType: ', cardWithType);
    const gameCards = cardWithName.concat(cardWithType);
    console.log("gameCards is concat array cardWithName and cardWithType: ", gameCards);
    
    for(let i = 0; i <= 51; i++){
         // Créations des différentes cartes
        const divElement = document.createElement('div');
        const imgElement = document.createElement('img');
        // Assign to card his attributes
        divElement.setAttribute('class', 'card');
        divElement.setAttribute('id', `card${i+1}`);
        // Assign to img his attributes
        imgElement.setAttribute('src', defaultLinkCard+widthCard+textCard+defaultText);
        // set child to div
        firstRandomIndex = Math.floor(Math.random() * gameCards.length);
        secondRandomIndex = Math.floor(Math.random() * gameCards[firstRandomIndex].length);
        const nameCard = gameCards[firstRandomIndex][secondRandomIndex]
        divElement.appendChild(imgElement);
        imgElement.addEventListener('click', function(e){
            e.target.src = defaultLinkCard + widthCard + '/' + colorCards[i] + '/' + 'FFFFFF' + '/' + textCard + nameCard;
            gameCards[firstRandomIndex].splice(secondRandomIndex, 1);
            console.log("removed cardsName on array", gameCards)
            if(gameCards[firstRandomIndex].length === 0){
                gameCards.splice(firstRandomIndex, 1);
            }
        });

        imgElement.addEventListener('dblclick', function(e){
            e.target.src = defaultLinkCard + widthCard + '/' + textCard + defaultText
        });

        document.body.appendChild(divElement);
    }
}