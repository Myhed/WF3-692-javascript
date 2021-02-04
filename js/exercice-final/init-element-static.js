import { generateGameCards, generateColorsCards, generateGameObjectCardFor52, removeCardOnArrayWhenIsAffected } from './cards.js'
const nameCards = ["As", "Roi", "Dame", "Valet"];
const typeCards = ["Trefle", "Coeur", "Carreau", "Pique"];

export const defaultLinkCard = 'https://via.placeholder.com/';
export let textCard = "?text=";
export let widthCard = "175";

export const gameCards = generateGameCards(typeCards, nameCards);
export const colorsCards = generateColorsCards(52);

export const gameObjectFor52Card = generateGameObjectCardFor52(typeCards, nameCards);


export function randomIndex(tableau){
    const firstLevelIndex = Math.floor(Math.random() * tableau.length);
    const secondLevelIndex = Math.floor(Math.random() * tableau[firstLevelIndex].length);
    return [firstLevelIndex, secondLevelIndex];
}

export {removeCardOnArrayWhenIsAffected};