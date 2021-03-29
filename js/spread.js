export function spread(){
    console.log('\n\n=========== SPREAD OPERATOR =========== \n\n')
    function magazin(paniers, tab){ // permet de désassembler un tableau et garder son contenu
        console.log([...paniers, ...tab]);
    }

    const paniers = [
    {
        name: 'poire',
        rayon: 'fruit',
        prixUnitaire: 0.65
    },
    {
        name: 'poire',
        rayon: 'fruit',
        prixUnitaire: 0.65
    }
]

    magazin(paniers, [2,4]);
    console.log('\n\n=========== END SPREAD OPERATOR =========== \n\n')
}