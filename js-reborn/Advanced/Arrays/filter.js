const numeros = [1,2,3,42134,23423,4123,1231,232,3,123,21,31,231241,2356757568,789789,89,78,9898,98]
// function callbackFilter(valor){
//     return valor > 10 ? true :  false;
// }

// const numerosMaioresQue10 = numeros.filter(callbackFilter);

// console.log(numerosMaioresQue10);

const numerosMaioresQue10 = numeros.filter(i => i > 10);
console.log(numerosMaioresQue10);