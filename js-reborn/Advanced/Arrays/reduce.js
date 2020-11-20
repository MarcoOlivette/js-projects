const vet = [1312,31,24,46,6473456,44,5,435,2354,6,6,875456,5345,];

// console.log(vet.reduce( function (total, indice){
//     return total += indice;
// }))

const pessoas = [
    {nome: 'Luiz', idade: 123},
    {nome: 'Luiz2', idade: 2},
    {nome: 'Luiz3', idade: 23},
    {nome: 'Luiz4', idade: 12},
]

console.log(
    pessoas.reduce( function(maior, indice){
        if(maior.idade < indice.idade) return indice;
        return maior
    })
)