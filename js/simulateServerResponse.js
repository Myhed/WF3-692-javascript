export function simulateServerResponse(){
    // setTimeout s'exécute une seule fois
    const responseServer = setTimeout(function(){
        console.log('timeout exec : ');
        console.log('\n');
        // console.log('\n\n=========== SIMULATE SERVER RESPONSE =========== \n\n');
        // console.log('Server data: ', JSON.stringify({status: 200, datas: [{content: 'no data expected'}]}))
        // console.log('\n\n=========== END SIMULATE SERVER RESPONSE =========== \n\n');
    }, 5000);

    // setInterval s'exécute n fois toutes les n milisecond 
    let i = 0;
    const responseServerInterval = setInterval(function(){
        if(i > 3){
            console.log('stop responseServerInterval');
            clearInterval(responseServerInterval);
        }
        i++
        console.log('setInterval exec: ');
        console.log('\n');
    }, 500);
    
}