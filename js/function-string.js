export function functionString(){
    console.log('\n\n=========== FUNCTION STRING =========== \n\n');
    // substr
    const string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quam sequi, 
    cupiditate dolore odio amet nostrum voluptatum unde fuga reprehenderit? 
    Fuga nulla eius quae libero laudantium. Veniam id placeat amet!
    `;

    console.log('string: ', string);
    console.log('size string: ', string.length);

    console.log('string substr: ', string.substr(0, 150));

    // StartWiths
    console.log('string startsWiths: ', string.startsWith('Lorem'));
    // lastIndexOf permet de rechercher l'index d'un mot dans une chaine de caractère
    console.log('lastIndexOf startsWiths: ', string.lastIndexOf('adipisicing'));
    // split permet de découper une chaine de caractère et de le transformer en tableau
    console.log('string split', string.split(''));
    // match permet de tester deux chaines de caractère entre elle
    console.log('match string: ' ,'toto'.match('toti'));
    // trim permet d'enlever tous les espaces d'une chaine de caractères
    console.log('trim string: ' ,`Hello World !`.trim());
    // toUpperCase permet de rendre une chaine de caractère en majuscule
    console.log('toUpperCase string: ' ,`Hello World !`.toUpperCase());
    // toLowerCase permet de rendre une chaine de caractère en minuscule
    console.log('toUpperCase string: ' ,`HELLO WORLD !`.toLowerCase());
    // permet de transformer un mot ou un groupe de mot en balise a avec le lien mis en paramètre
    console.log('google'.link('https://google.com'));
    console.log('\n\n=========== END FUNCTION STRING =========== \n\n');

}