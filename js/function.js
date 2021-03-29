export function howToHandleFunction(){
    console.log('\n\n=========== HANDLE FUNCTION =========== \n\n')
    // cas sans callback
    function sayHello2(name, age, isFormateur, eleves){
        return 'hello ' + name;
    }
    console.log('sayHello(): ',sayHello2('Myhed', 18, true, []));
    // cas avec callback
    function sayHello(name, age, isFormateur, eleves, done){
        done('hello ' + name);
    }

    sayHello('Myhed', 18, true, [], function(resultat){
        console.log('resultat done callback: ', resultat)
    });

    console.log('\n\n=========== END HANDLE FUNCTION =========== \n\n')
}