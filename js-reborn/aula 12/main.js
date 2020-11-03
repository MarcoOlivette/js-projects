// let a = "A";
// let b = "B";
// let c = "C";
// const letras = [b,c,a];
// [a,b,c] = letras
// // console.log(a,b,c,letras);

// letras[0] = "asdfasdfs";

// console.log(a,b,c,letras);

// const numeros = [1,2,3,4,5,6,7,8,9];

// const [a,b, ...resto] = numeros;

// console.log(a,b,resto,numeros);

const pessoa = {
    nome: "Marco",
    sobrenome: "Olivette",
    idade: 21,
    endereco: {
        rua: "Boa Vista da Apareida",
        numero: 320
    }
}

// const {nome, sobrenome, idade, endereco : {rua, numero}} = pessoa;

// console.log(nome, sobrenome,idade, rua, numero);

const { idade, ...resto } = pessoa;

console.log(idade, resto);
