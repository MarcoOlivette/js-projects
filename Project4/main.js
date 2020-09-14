var h1 = document.querySelector('h1');

console.log(h1);

var a = document.querySelector('div ul li a');

console.log(a);

var btn = document.querySelector('div#teste button[name=btn]');

console.log(btn);

btn.onclick = () => {
    var div = document.getElementById("teste");
    var br = document.createElement('br');
    var span = document.createElement('span');
    span.innerText = "novo span"
    div.appendChild(br);
    div.appendChild(span);
}

function some(i,j){
 return i + j;
}

btn.onclick = some;
