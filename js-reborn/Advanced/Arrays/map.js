const pessoas = [
    {
        nome: 'marco',
        idade: 12
    },
    {
        nome: 'Luiz',
        idade: 32
    },
    {
        nome: 'João',
        idade: 156
    },
    {
        nome: 'Roberto',
        idade: 123
    }
]

const multiplica = pessoas.map(obj => {
    const newObj = {...obj}
    newObj.idade *= 2;
    return newObj;
})

console.log(pessoas,multiplica);