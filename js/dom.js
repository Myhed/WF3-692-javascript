export function howToHandleDom(){
    console.log('\n\n=========== HANDLE DOM =========== \n\n')
    const body = document.body;
    // QuerySelector && QuerySelectorAll permet de selectionner des éléments dans le DOM
    const p = document.querySelectorAll('#paragraphe');
    console.log(p);
    // Création d'élement en javascript
    const div = document.createElement('div');
    // Ajouter ou Supprimer une class
    div.classList.add('maClass');
    div.classList.remove('maClass');
    // Ajouter/Supprimer/Récupérer un attribut sur un élément HTML
    div.setAttribute('id', 'monId'); // permet d'ajouter n'importe quelle attribut à un élément HTML
    div.removeAttribute('class'); // permet de supprimer n'importe quelle attribut sur un élément HTML
    console.log('getAttribute: ', div.getAttribute('id')); // permet de récupérer un attribut
    console.log(div);
    console.log('\n\n=========== END HANDLE DOM =========== \n\n')
}