import { boucle } from './boucle.js';
import { howToHandleFunction } from './function.js';
import { howToHandleDom } from './dom.js';
import { destructuring } from './destructuring.js';
import { spread } from './spread.js';

window.onload = function(){
    // Dom
    howToHandleDom();
    // Les boucles
    boucle();
    // function
    howToHandleFunction();
    // forme destructurer en javascript
    destructuring();
    // spread opérator
    spread();
}