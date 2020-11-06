// function somaTudoEssaCaraia(){
//     let total = 0;
//     for(let i of arguments){
//         total += i;
//     }
//     return total;
// }

// console.log(somaTudoEssaCaraia(1,2,3,4,4,234,234,1234,21342134,12341234,1234,21));

// const euOdeioOMundo = () => console.log('cu');

// function queroMorrer(funcao){
//     funcao();
// }

// queroMorrer(euOdeioOMundo);

// function soma(a = 0, b = 0){
//     console.log(a+b);
// }

// soma(123,123);

// function funcao([a,b,c]){
//     console.log(a,b,c);
// }

// funcao([1,2,3,123,21,312,3])

// function conta(operador, acumulador, ...numeros){
//     for(let numero of numeros){
//         if (operador === '-') acumulador -= numero;
//         if (operador === '+') acumulador += numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }
//     return acumulador;
// }

// console.log(conta('*', 1, 12,312,312,312,312,312,321))

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }

//     return falaResto;
// }

// const teste = falaFrase('Ola');
// console.log(teste());

// function criaMultiplicador(multiplicador){
//     return function multiplica(n){
//         return n * multiplicador;
//     }
// }

// const duplica = criaMultiplicador(2);
// const triplica = criaMultiplicador(3);
// console.log(duplica(123), triplica(123));


function teste()