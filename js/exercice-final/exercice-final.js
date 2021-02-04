import { appendToDom } from './handleDom.js';
import { gameCards, colorsCards, defaultLinkCard, textCard, widthCard, gameObjectFor52Card, randomIndex, removeCardOnArrayWhenIsAffected } from './init-element-static.js';

console.log(gameObjectFor52Card);

window.onload = function(){ 
    
    appendToDom("body", 52, function(childWillAppend, index){
        childWillAppend.src = defaultLinkCard + widthCard + textCard + 'MisteryCard'; 
        childWillAppend.onclick = function(){
            const [randomFirstLevelIndex, randomSecondLevelIndex] = randomIndex(gameCards);
            this.src = `${defaultLinkCard}${widthCard}/${colorsCards[index]}/FFFFFF/${textCard}${gameCards[randomFirstLevelIndex][randomSecondLevelIndex]}`;
            removeCardOnArrayWhenIsAffected(gameCards[randomFirstLevelIndex], gameCards[randomFirstLevelIndex][randomSecondLevelIndex]);
            if(gameCards[randomFirstLevelIndex].length === 0 ){
                gameCards.splice(randomFirstLevelIndex,1);
            }
        }
    }, { id:"", className: ["card"], child: "img" });   
}