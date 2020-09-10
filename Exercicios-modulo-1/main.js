// Exercicio 1
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP",
    endereco() {
        return "O usuário mora em " +
            this.cidade +
            "/" +
            this.uf +
            " no bairro " +
            this.bairro;
    }
};

console.log(endereco.endereco());


// Exercicio 2
function pares(x, y) {
    for (var i = x; i < y; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

pares(0, 10);

// Exercicio 3

function temHabilidade(skills) {
    return skills.includes("Javascript")
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

// Exercicio 5

var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function  showInformation(users){
    for(u of users){
        console.log(
            "O "+ u.nome + " possui as habilidades " + u.habilidades.join(' , ')
        )
    }
}

console.log(showInformation(usuarios))
