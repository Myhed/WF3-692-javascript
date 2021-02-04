/**
 * @NewVersion Here
 */

export function generateColorsCards(numberTotalOfCards){
    return Array(numberTotalOfCards).fill(null).map((__, index) => {
       return Array(6).fill(null).reduce((acc, item) => {
         item = (Math.floor(Math.random() * 16)).toString(16);
         acc += item;
         return acc;
      }, "");
   });  
}

export function generateNamedCardWithType(nameCards, typeCards){
    return Array(typeCards.length).fill().map((__, i) => {
        const typeCard = typeCards[i]
        return Array(nameCards.length).fill([]).reduce((acc, item, index) => {
            item[index] = typeCard + nameCards[index];
            acc = item;
          return acc;   
        }, []);
    });
}

export function generateNumberCardType(typeCards){
    return Array(typeCards.length).fill().map((__, i) => {
        const typeCard = typeCards[i];
        return Array(9).fill([]).reduce((acc, item, index) => {
            item[index] = typeCard + ' ' + (index + 2);
            acc = item;
          return acc;   
        }, []);
    });
}

export function generateGameCards(typeCards, nameCards){
    const namedCardsWithType = generateNamedCardWithType(nameCards, typeCards);
    const numberCardsType = generateNumberCardType(typeCards);
    return namedCardsWithType.concat(numberCardsType)
}

export function removeCardOnArrayWhenIsAffected(array, elementToRemove){
    const indexOfNameRandom = array.indexOf(elementToRemove);
    array.splice(indexOfNameRandom, 1);
}

/**
 * @OldVersionNotYetImplemented Here
 */



/**
 * @FeatureWorkInProgress
 * @ObjectCards
 */

export function generateGameObjectCardFor52(typeCards, nameCards){
return typeCards.map(typeCard => {
   return Array(14).fill({}).reduce((acc, item, index) => {
        if(typeof item[typeCard] !== "undefined"){
            const obj = {}
            item[typeCard][index] = Object.assign(obj, {typeCard});
             if(index <= 9 ){
              item[typeCard][index] = Object.assign(obj, {numberCard: index+1});
             }else{
             //  console.log(index);
              item[typeCard][index] = Object.assign(obj, {nameCards: `${nameCards[index%nameCards.length]}`});
             }
            }else{
              item[typeCard] = {};
            }
            acc = item;
            return acc;
        }, {});
    });
}

    // const generateCard32 = typeCartes.map(typeCarte => {
    //     return Array(9).fill({}).reduce((acc, item, index) => {
    //          if(typeof item[typeCarte] !== "undefined"){
    //              const obj = {}
    //              item[typeCarte][index] = Object.assign(obj, {typeCarte});
    //              if(index >= 5 ){
    //                  item[typeCarte][index] = Object.assign(obj, {nombreCarte: index+2});
    //              }else{
    //                  item[typeCarte][index] = Object.assign(obj, {nomCarte: `${nomCartes[index%nomCartes.length]}`});
    //                 //  console.log(index);
    //              }
    //          }else{
    //              item[typeCarte] = {};
    //          }
    //          acc = item;
    //          return acc;
    //      }, {});
    //  });

    // console.log(generateCard32);