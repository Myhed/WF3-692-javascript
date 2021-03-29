export function boucle(){
    console.log('\n\n=========== BOUCLE =========== \n\n')
    const panier = ['pomme', 'banane', 'poire'];

    console.log('panier[0] value: ', panier[0]);
    console.log('panier[1] value: ', panier[1]);
    console.log('panier[2] value: ', panier[2]);
    for(let fruit of panier){
        console.log('fruit: ', fruit);
    }

    panier.forEach((value, index) => { // Cette Boucle permet seulement d'afficher les élément dans un tableau. /!\ Elle ne retourne rien
        console.log('value: ', value);
        console.log('index:', index);
    });

    const newTab = panier.map(function(value, index) {
        if(value === 'banane'){
            value = 'orange';
        }
        return value;
    });
    console.log('newTab: ', newTab);

    const monObj = {
        foo: 'bar',
        baz: 'foo'
    }

    console.log('monObj property foo: ', monObj.foo);
    console.log('monObj property baz: ', monObj.baz);
    
    // LOOP Object
    for(let key in monObj){
        console.log('key: ', key);
        console.log('value: ', monObj[key]);
    }

    console.log('tableau keys: ', Object.keys(monObj));
    Object.keys(monObj).forEach((key, index) => {
        console.log('key: ', key);
        console.log('value: ', monObj[key]);
        console.log('index: ', index);
    });

    Object.values(monObj).forEach(function(value, index){
        console.log('value: ', value);
    });

    console.log(Object.entries(monObj));
    console.log('\n\n=========== END BOUCLE =========== \n\n')
}