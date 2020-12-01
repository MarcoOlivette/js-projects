function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
	this.estoque = estoque;
	
	Object.defineProperties(this, {
		nome : {
			enumerable: true,
			value: nome,
			writable: true,
			configurable: true,
		},
		preco : {
			enumerable: true,
			value: preco,
			writable: true,
			configurable: true,
		},
		estoque : {
			enumerable: true,
			value: estoque,
			writable: true,
			configurable: true,
		}
	});
}

const p1 = new Produto("produto", 20, 3);
p1.estoque = 12313;
console.log(p1);
