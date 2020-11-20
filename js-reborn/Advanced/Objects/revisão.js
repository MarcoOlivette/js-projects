const pessoa = new Object();

pessoa.nome = 'Marco';
pessoa.sobrenome = 'Olivette';

pessoa.falaNome = function(){
    return this.nome +' '+ this.sobrenome;
}

console.log(pessoa.falaNome());

function newObj(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const aaa = new newObj('Marco', 'Olivette');
newObj.sobrenome('adsfasdf');
console.log(aaa);
console.log(aaa);
