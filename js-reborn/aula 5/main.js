const num1 = prompt('Numero');

const appElement = document.querySelector('#app');
const brElement = document.createElement('br');
const makeElement = (value) => {
    console.log(value)
    let divElement = document.createElement('div');
    let textNodeElement = document.createTextNode(value);
    divElement.appendChild(brElement);
    divElement.appendChild(textNodeElement);
    appElement.appendChild(divElement);
}

makeElement(num1);

makeElement(Math.pow(num1,num1));

makeElement(isNaN(num1));

makeElement(Math.floor(num1));
let temp = parseFloat(num1);
makeElement(temp.toFixed(2));
