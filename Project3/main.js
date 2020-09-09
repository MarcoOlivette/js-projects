function novoElemento(){
    var div = document.getElementById("div-elemento");
    var br = document.createElement('br');
    var span = document.createElement('span');
    span.innerText = "novo span"
    div.appendChild(span);
    div.appendChild(br);
}