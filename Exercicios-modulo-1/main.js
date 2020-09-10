// Exercicio 1
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP",
    endereco(){
        return "O usuário mora em " 
        + this.cidade 
        + "/"
        + this.uf
        + " no bairro "
        + this.bairro;
    }
};

console.log(endereco.endereco());
