export function functionArray(){
    console.log('\n\n=========== FUNCTION ARRAY =========== \n\n');
    const array = [1, 2, 3, 4, 5];
    array.pop(); // supprimer à la fin d'un tableau
    console.log('array pop: ', array);
    array.shift(); // supprime les éléments au début d'un tableau
    console.log('array shift: ', array);
    array.push(5); // rajoute à la fin d'un tableau
    console.log('array push: ', array);
    array.unshift(1); // rajoute au début d'un tableau
    console.log('array unshift: ', array);
    console.log('\n\n=========== END FUNCTION ARRAY =========== \n\n');

    const newArray = array.slice();
    console.log('debut newArray: ', newArray);
    const slicedArray = newArray.slice(3, newArray.length-1);
    
    console.log('slicedArray: ', slicedArray);
    console.log('pop newArray: ', newArray);
    console.log('initial Array: ', array);

    //splice
    array.splice(1,1);
    console.log('splice array: ', array);
    // replace with splice
    array.splice(1,0, 'replace');
    console.log('splice replace array: ', array);
    // inverser le sens d'un tableau
    const reverseArray = array.reverse();
    console.log('reverse array: ', reverseArray);
    console.log('join array', array.join(' '));
    console.log('indexOf array target value "replace": ', array.indexOf('replace'));
    console.log('sort reverseArray: ', reverseArray.sort());
    console.log('isArray array: ', Array.isArray(reverseArray));
    console.log('\n\n=========== END FUNCTION ARRAY =========== \n\n');

}