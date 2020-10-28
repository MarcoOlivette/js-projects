const nome = "Marco Aurelio Vieira Olivette";

const appElement = document.querySelector('#app')
const brElement = document.createElement('br');


function createElement(value){
    let divElement = document.createElement('div');
    let strongElement = document.createElement('strong');
    let text = document.createTextNode(value);
    strongElement.appendChild(text)
    divElement.appendChild(strongElement);
    divElement.appendChild(brElement);
    appElement.appendChild(divElement);
}

createElement(nome);

createElement(`${nome.length} letras`);

createElement(`${nome[1]} é a segunda letra do meu nome`);

createElement(`${nome.indexOf('v')} Primeiro indice da letra V`);

createElement(`${nome.lastIndexOf('a')} Ultimo indice da letra A`);

createElement(`${nome.slice(-3)} Ultimas 3 letras do meu nome`);

createElement(`${nome.split(' ')} As palavras do meu nome`);

createElement(`${nome.toUpperCase()} Nome em maiúsculo`);

createElement(`${nome.toLowerCase()} Nome em minusculo`);
