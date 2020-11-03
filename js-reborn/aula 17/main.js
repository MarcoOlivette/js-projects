function returnHour(date = new Date()){
    if(!(date instanceof Date)){
        throw new TypeError('Esperando tipo Date');
    }

    return date.toLocaleTimeString('pt-BR', {
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12: false
    });
}


console.log(returnHour());  