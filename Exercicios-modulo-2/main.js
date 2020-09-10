function exercicio3() {
    var nomes = ["Diego", "Gabriel", "Lucas"];
    var divExercicio3 = document.querySelector('#exercicio3');
    if (document.querySelector('.lista') == null) {
        var ul = document.createElement('ul');
        ul.classList.add('lista')
        for (n of nomes) {
            var li = document.createElement('li');
            li.innerText = n;
            ul.appendChild(li);
        }
        divExercicio3.appendChild(ul);
    }
}

function exercicio1() {
    if (document.querySelector('.box') == null) {
        var box = document.createElement('div');
        var box = document.createElement('div');
        box.classList.add('box')
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = "#f00";
        var app = document.querySelector('div#app');
        app.appendChild(box);
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function exercicio2() {
    if (document.querySelector('.box') != null) {
        var box = document.querySelector('.box');
        box.style.backgroundColor = getRandomColor();
    }
}

function adicionar() {
    if (document.querySelector('.lista') != null) {
        var lista = document.querySelector('.lista');
        var input = document.querySelector('input[name=nome]');
        var valorInput = input.value;
        var li = document.createElement('li');
        li.innerText = valorInput;
        lista.appendChild(li);
    }
}