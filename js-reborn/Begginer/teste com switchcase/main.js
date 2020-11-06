const num1 = prompt('digite numero um');
const num2 = prompt('digite numero dois');
const op = prompt('qual operação??');


switch (op) {
    case "-":
        alert(`resultado é ${num1 - num2}`)
        break;
    case "+":
        alert(`resultado é ${num1 + num2}`)
        break;
    case "/":
        if(num2 == 0){
            alert('NÃO EXISTE DIVISÃO POR ZERO SEU PUT DO CARALHO OOOOO');
            break;
        }
        alert(`resultado é ${num1 / num2}`)
        break;
    case "*":
        alert(`resultado é ${num1 * num2}`)
        break;
    default:
        alert('valor incorreto meu amiguinhoo');
}