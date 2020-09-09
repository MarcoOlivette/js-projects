var h1 = document.querySelector('h1');

console.log(h1);

var a = document.querySelector('div ul li a');

console.log(a);

function novoElemento(){
    var div = document.getElementById("div-novo-elemento");
    var br = document.createElement('br');
    var span = document.createElement('span');
    span.innerText = "novo span"
    div.appendChild(br);
    div.appendChild(span);

    var span = document.querySelector('div#div-novo-elemento span');
    console.log(span);
}