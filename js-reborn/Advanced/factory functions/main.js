function criaPessoa( nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,

        fala (assunto){
            return `${this.nome} ${assunto}`;
        },

        peso, 
        altura,

        get imc(){
            return Math.floor(this.peso / (this.altura ** 2));
        },

        set setAltura(altura){
            this.altura = altura;
        }
    }
}

const marco = criaPessoa('marco', 'olivette',70, 1.7);
console.log(marco.imc);
marco.setAltura = 1.9;
console.log(marco.imc);
console.log(marco);

