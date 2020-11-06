const pessoa = [{
    nome: 'Marco',
    idade: 12
}];

// for (let attr in pessoa){
//     console.log(pessoa[attr]);
// }

for (let attr of pessoa) {
    console.log(attr);
}

const nome = "Marco Aurelio";

for (let attr of nome) {
    console.log(attr);
}