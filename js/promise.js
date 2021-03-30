export async function functionPromise(){
    // VERSION PROMISE
    function buildPromise(state){
        return new Promise(function(resolve, reject){
            if(state > 0){ // l'état de la promesse est dépend du state qu'on lui donne
                resolve('resolved Promise');
            }else{
                reject('rejected Promise');
            }
        });
    }

    buildPromise(1)
        .then(function(result){
            console.log('\n\n=========== HANDLE PROMISE resolve =========== \n\n');
             console.log('result: ', result);
            console.log('\n\n=========== END HANDLE PROMISE resolve =========== \n\n');
        })
        .catch(function(error){
            console.log('\n\n=========== HANDLE PROMISE reject =========== \n\n');
             console.log('error: ', error);
            console.log('\n\n=========== HANDLE PROMISE reject =========== \n\n');
        });

    // VERSION ASYNC

    async function buildAsyncFunction(state){
        if(state > 0){
            return 'resolved promise';
        }else{
            return new Error('reject promise');
        }
    }

    try{
        console.log('async resolved promise: ', await buildAsyncFunction(1));
    }catch(error){
        console.log('catch async error: ', error);
    }
    
    // VERSION CALLBACK
    
    function buildCallback(state, done){
        if(state > 0){ // les valeurs de la callback est dépend du state qu'on lui donne
            done('resultat callback', null);
        }else{
            done(null, 'error callback');
        }
    }

    buildCallback(0, function(result, error){
        console.log('resultat callback: ', result);
        console.log('error callback: ', error);
    });

    console.log('synchrone');

}