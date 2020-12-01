function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: true,
  });

  Object.defineProperty(this, "estoque", {
    enumerable: false, // mostra a chave
    value: estoque, // valor
    writable: true, // pode altera
    configurable: true, // configurável
  });

  Object.defineProperty(this, "estoque", {
    enumerable: false, // mostra a chave
    value: function () {
      return estoque;
    }, // valor
    writable: true, // pode altera
    configurable: true, // configurável
  });
}

const p1 = new Produto("produto", 20, 3);
p1.estoque = 12313;
console.log(p1, p1.estoque());
