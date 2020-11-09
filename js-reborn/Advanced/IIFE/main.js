( (operador, acumulador, ...numeros) => {
    for(let index of numeros){
        if(operador === '-') acumulador -= index;
        if(operador === '+') acumulador += index;
        if(operador === '*') acumulador *= index;
        if(operador === '/') acumulador /= index;
    }
    console.log(acumulador);
})('+',11111,12,3,123123123,1231,23213,)