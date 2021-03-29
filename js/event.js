export function event(){
    /**
     * @ref https://www.w3schools.com/jsref/dom_obj_event.asp  
     * @description ALL LISTENER DESCRIPTION IN THE URL
     */ 
    console.log('\n\n=========== EVENT LISTENER =========== \n\n');
    const p = document.querySelector('#paragraphe');
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    console.log('p: ', p);
    p.addEventListener('click', function(e){
        console.log('position Y: ', e.clientY);
        console.log('position X: ', e.clientX);
        e.target.innerText = 'clicked !';
        // alert('clicked !');
    });
    // p.onclick = function(){
    //     alert('clicked !');
    // }

    form.addEventListener('submit', function(){
        // alert('envoi formulaire');
    });

    input.addEventListener('keydown', function(e){
        console.log(e);

    });

    input.addEventListener('keypress', function(e){
        console.log(e);
    });

    document.addEventListener('scroll', function(e){
        // console.log('scrollX: ', window.scrollX);
        // console.log('scrollY: ', window.scrollY);
    });
    
    document.addEventListener('mousemove', function(e){
        // console.log('mouse moved on Y: ',e.clientY);
        // console.log('mouse moved on X: ',e.clientX);
    });

    p.addEventListener('mouseover', function(e){
        console.log('over paragraphe')
        e.target.style.background = 'red';
    });

    p.addEventListener('mouseout',function(e){
        console.log('mouseout');
        e.target.style.background = 'none';
    });

    p.addEventListener('mousedown', function(e){
        e.target.style.color = 'blue';
    });

    p.addEventListener('mouseup', function(e){
        e.target.style.color = 'green';
    });
    
    input.addEventListener('change', function(e){
        console.log(e);
        console.log('text changed !');
    });
    
    console.log('\n\n=========== END EVENT LISTENER =========== \n\n')
}