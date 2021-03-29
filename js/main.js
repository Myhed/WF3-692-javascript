import { boucle } from './boucle.js';
import { howToHandleFunction } from './function.js';
import { howToHandleDom } from './dom.js';
import { destructuring } from './destructuring.js';
import { spread } from './spread.js';
import { event } from './event.js';
import { functionArray } from './function-array.js';
import { functionString } from './function-string.js';

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
    // event listener
    event();
    // function array
    functionArray();
    // function string
    functionString();
}