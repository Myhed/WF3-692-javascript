window.onload = function(){
    // Lien à utiliser
    const defaultLinkCard = 'https://via.placeholder.com/';
    let textCard = "?text=MisteryCard";
    let widthCard = "175"; 
    const nameCards = ["As","roi","dame","valet"];
    const typeCartes = ["Trefle", "Carreau", "Coeur", "Pique"];
    const cardWithName = [];
    const cardWithType = [];

    for(let i = 0; i < typeCartes.length; i++){
        cardWithName[i] = [];
        for(let j = 0; j < nameCards.length; j++){
            cardWithName[i][j] = `${typeCartes[i]} ${nameCards[j]}` 
        }
    }

    for(let i = 0; i < typeCartes.length; i++){
        cardWithType[i] = [];
        for(let j = 2; j <= 10; j++){
            cardWithType[i][j-2] = `${typeCartes[i]} ${j}` 
        }
    }

   const gameCards = cardWithName.concat(cardWithType);

    // Initialisation des 32 carte
    Array(32).fill(null).forEach((__, index) => {
        // Créations des différentes cartes
        const divElement = document.createElement('div');
        const imgElement = document.createElement('img');
        // Assign to card his attributes
        divElement.setAttribute('class', 'card');
        divElement.setAttribute('id', `card${index+1}`);
        // Assign to img his attributes
        imgElement.setAttribute('src', defaultLinkCard+widthCard+textCard);
        // set child to div
        divElement.appendChild(imgElement);
        document.body.appendChild(divElement);
    });

    // affecte à listener to each card

    const cards = document.querySelectorAll('.card');
    const colorsCards = Array(cards.length).fill(null).map((__, index) => {
        return Array(6).fill(null).reduce((acc, item) => {
            item = (Math.floor(Math.random() * 16)).toString(16);
            acc += item;
            return acc;
        }, "");
    });

    cards.forEach((card, index) => {
        card.addEventListener('click', function(){
            const firstRandomIndex = Math.floor(Math.random() * gameCards.length);
            const secondRandomIndex = Math.floor(Math.random() * gameCards[firstRandomIndex].length);
            console.log(gameCards[firstRandomIndex][secondRandomIndex]);
            this.children[0].src = defaultLinkCard + widthCard + '/' + colorsCards[index]+ '/' + 'FFFFFF' + '/'+ `?text=${gameCards[firstRandomIndex][secondRandomIndex]}`;
            gameCards[firstRandomIndex].splice(secondRandomIndex, 1);
            if(gameCards[firstRandomIndex].length === 0){
                gameCards.splice(firstRandomIndex, 1);
            }
            console.log("gameCards: ", gameCards);
        }, false);

        card.addEventListener('dblclick', function(){
            this.children[0].src = defaultLinkCard + widthCard + '/' + textCard;
        }, false);
    });


    // const generateCard52 = typeCartes.map(typeCarte => {
    //    return Array(14).fill({}).reduce((acc, item, index) => {
    //         if(typeof item[typeCarte] !== "undefined"){
    //             const obj = {}
    //             item[typeCarte][index] = Object.assign(obj, {typeCarte});
    //             if(index <= 9 ){
    //                 item[typeCarte][index] = Object.assign(obj, {nombreCarte: index+1});
    //             }else{
    //                 console.log(index);
    //                 item[typeCarte][index] = Object.assign(obj, {nomCarte: `${nomCartes[index%nomCartes.length]}`});
    //             }
    //         }else{
    //             item[typeCarte] = {};
    //         }
    //         acc = item;
    //         return acc;
    //     }, {});
    // });

//     const generateCard32 = typeCartes.map(typeCarte => {
//         return Array(9).fill({}).reduce((acc, item, index) => {
//              if(typeof item[typeCarte] !== "undefined"){
//                  const obj = {}
//                  item[typeCarte][index] = Object.assign(obj, {typeCarte});
//                  if(index >= 5 ){
//                      item[typeCarte][index] = Object.assign(obj, {nombreCarte: index+2});
//                  }else{
//                      item[typeCarte][index] = Object.assign(obj, {nomCarte: `${nomCartes[index%nomCartes.length]}`});
//                     //  console.log(index);
//                  }
//              }else{
//                  item[typeCarte] = {};
//              }
//              acc = item;
//              return acc;
//          }, {});
//      });

//     console.log(generateCard32);
}