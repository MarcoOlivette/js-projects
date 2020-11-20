 const numeros = [123,3546,44,343,421,341,3,4,565234243,4667,87,65342,512];

const resultado = numeros.filter( function (valor){
    return valor % 2 === 0;
}).map( function (valor){
    return valor *= 2;
}).reduce( function (acumulador, valor){
    return acumulador+= valor;
});

console.log(resultado);

// Usando arrow

const resultado2 = numeros
.filter( valor => valor % 2 === 0)
.map( valor => (valor *= 2))
.reduce( (acumulador, valor) => (acumulador+= valor))

console.log(resultado2);