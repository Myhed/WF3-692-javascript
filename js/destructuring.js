export function destructuring(){
    console.log('\n\n=========== DESTRUCTURING =========== \n\n')
    const object = {
        a: 1,
        b: 2, 
        x: 3
    }

    const { a, b, x } = object;

    console.log('destruct a: ', a);
    console.log('destruct b: ', b);
    console.log('destruct x: ', x);

    const array = [4, 5];

    const [c, d] = array;
    console.log('destruct array: ',c);
    console.log('destruct array: ', d);

    const articles = {
        paniers: [
            {
                name: 'poire',
                rayon: 'fruit',
                prixUnitaire: 0.65
            },
            {
                name: 'poire',
                rayon: 'fruit',
                prixUnitaire: 0.65
            }
        ]
    }

    function magazin2({ paniers }){
        console.log('paniers: ', paniers);
    }
    
    magazin2(articles);
    
    console.log('\n\n=========== END DESTRUCTURING =========== \n\n')
}