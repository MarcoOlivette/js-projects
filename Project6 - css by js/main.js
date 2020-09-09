var linkElement = document.createElement('a');
linkElement.setAttribute('href','https://www.google.com');
var textElement = document.createTextNode('Acessar o google');
linkElement.appendChild(textElement);
var containerElement = document.getElementById('app');
containerElement.appendChild(linkElement);