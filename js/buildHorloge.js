export function buildHorloge(){
    let now;
    setInterval(function(){
         now = Date.now();
         const date = new Date(now);
         console.log('seconds: ', date.getSeconds());
         console.log('Minutes: ', date.getMinutes());
         
    });

}