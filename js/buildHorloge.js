function start(buttonStart){
    buttonStart.addEventListener('click', function(){
        time = setInterval(function(){
            now = Date.now();
            const date = new Date(now);
            const hoursIsMoreThan = date.getHours() > 9 ? `${date.getHours()}` : `0${date.getHours()}`;
            const minutesIsMoreThan = date.getMinutes() > 9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`;
            const secondsIsMoreThan = date.getSeconds() > 9 ? `${date.getSeconds()}` : `0${date.getSeconds()}`;
            horloge.innerText = `${hoursIsMoreThan}:${minutesIsMoreThan}:${secondsIsMoreThan}`
       });
    });
}

function stop(buttonStop){
    buttonStop.addEventListener('click', function(){
        clearInterval(time);
    });
}

function initHtml(){
    // CREATION DU H1
    const date = new Date(); // récupère la date courante
    const h1 = document.createElement('h1'); // création d'un élément html de type HTMLelement
    const textNodeH1 = document.createTextNode('Horloge'); // permet de créer un élément html de type text appeler Noeud Text
    h1.appendChild(textNodeH1); // Ajouter des enfant à un parent (appendChild)
    
    // CREATION DU PARAGRAPHE CONTENANT LA DATE

    const freezedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    const p = document.createElement('p');
    const textNodeP = document.createTextNode(freezedTime);
    p.setAttribute('id', 'horloge');
    p.appendChild(textNodeP);

    // CREATION DU BOUTON START
    
    const startButton =  document.createElement('button');
    const textNodeStartButton = document.createTextNode('START');
    startButton.setAttribute('id', 'start');
    startButton.appendChild(textNodeStartButton);
    start(startButton);

    // CREATION DU BOUTON STOP
    
    const stopButton =  document.createElement('button');
    const textNodeStopButton = document.createTextNode('STOP');
    stopButton.setAttribute('id', 'stop');
    stopButton.appendChild(textNodeStopButton);
    stop(stopButton);

    document.body.appendChild(h1);
    document.body.appendChild(p);
    document.body.appendChild(startButton);
    document.body.appendChild(stopButton);

    const horloge = document.querySelector('#horloge');
}

function buildHorloge(){
    let time;
    initHtml();
}
buildHorloge();