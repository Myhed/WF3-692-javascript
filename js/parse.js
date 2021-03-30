export function functionParse(){
    console.log('\n\n=========== HANDLE PARSE =========== \n\n')

    // HANDLE PARSE STRING TO NUMBER

    const numberString = '255';
    console.log('numberString type: ', typeof numberString);
    const number = parseInt(numberString);
    console.log('numberString type value: ', number);
    console.log('numberString type after parsing: ', typeof number);
    console.log('\n');

    // HANDLE PARSE NUMBER TP STRING

    console.log('numberString type: ', typeof number);
    console.log('number type value: ', number.toString(16));
    console.log('number type after parsing: ', typeof number);
    console.log('\n');

    // HANDLE PARSE ALL TYPE TO JSON

    const isNumber = 1;
    const isString = 'helloWorld';
    const isArray = [];
    const isCollection = {};
    const isBool = false;
    
    console.log('isNumber to JSON: ', JSON.stringify(isNumber));
    console.log('isString to JSON: ', JSON.stringify(isString));
    console.log('isArray to JSON: ', JSON.stringify(isArray));
    console.log('isCollection to JSON: ', JSON.stringify(isCollection));
    console.log('isBool to JSON: ', JSON.stringify(isBool));
    console.log('\n');

    // HANDLE PARSE JSON TO THE CORRECT TYPE JAVASCRIPT

    console.log('JSON to the correct Type (number): ', JSON.parse(isNumber));
    //console.log('JSON to the correct Type (string):', JSON.parse(isString)); <- ERROR, on ne peut pas parser un string en JSON
    // console.log('JSON to the correct Type (array): ', JSON.parse(isArray)); <- ERROR, on ne peut pas parser un tableau en JSON
    // console.log('JSON to the correct Type (collection): ', JSON.parse(isCollection)); <- ERROR on ne peut pas parser une collection en JSON
    console.log('JSON to the correct Type (boolean): ', JSON.parse(isBool));
    console.log('\n');

    // REAL DATA STRINGIFY TO JSON
    const obj = {
        number: 1,
        array: [],
        bool: false,
        collection: {},
        string: 'hello World'
    }
    
    // SIMULATE DATE RESPONSE TO THE SERVER
    const serverResponse = JSON.stringify(obj);
    console.log('serverResponse: ', serverResponse)

    // SIMULATE CLIENT RECEIVE RESPONSE FROM THE SERVER
    const datasReceivedByTheServer = JSON.parse(serverResponse);
    console.log('datasReceivedByTheServer: ', datasReceivedByTheServer);

    console.log('\n\n=========== END HANDLE PARSE =========== \n\n')   
}