export function handleDate(){
    console.log('\n\n=========== HANDLE DATE FUNCTION =========== \n\n');
    const date = new Date();
    console.log('hours: ', date.getHours());
    console.log('minutes: ', date.getMinutes());
    console.log('seconds: ', date.getSeconds());
    console.log('day: ', date.getDay());
    console.log('month:', date.getMonth() + 1);
    console.log('time: ', date.getTime());
    console.log('seconds: ', date.getSeconds());
    console.log('date: ', date);
    console.log('\n\n=========== END HANDLE DATE FUNCTION =========== \n\n');
}