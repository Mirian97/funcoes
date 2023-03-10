let totalDoItem = 0;
let totalDeItens = 0;
let totalAPagar = 0;
let totalComDesconto = 0;
let desconto = 0;

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumoDoCarrinho: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        carrinho.calcularTotalDeItens();
        carrinho.calcularTotalAPagar();
    },

    addProdutoAoCarrinho: function (produto) {
        for (let item of carrinho.produtos) {

            if (item.id === produto.id) {
                return item.qtd += produto.qtd;
            } else {
                return this.produtos.push(produto);
            }
        }
    },

    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        for (let i = 0; i < this.produtos.length; i++) {
            totalDoItem += this.produtos[i].qtd * this.produtos[i].precoUnit;
            console.log(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(totalDoItem / 100).toFixed(2)}`)
        }
        carrinho.calcularTotalDeItens();
        carrinho.calcularTotalAPagar();
    },

    calcularTotalDeItens: function () {
        for (let item of this.produtos) {
            totalDeItens += item.qtd;
        }
        console.log(totalDeItens);
    },

    calcularTotalAPagar: function () {
        for (let item of this.produtos) {
            totalAPagar += item.qtd * item.precoUnit;
        }
        console.log(`Total a pagar: R$ ${(totalAPagar / 100).toFixed(2)}`)
    },

    calcularDesconto: function () {
        let produtoMaisBarato = Infinity;
        let dezPorcento = totalAPagar * 0.10;

        for (let item of this.produtos) {
            if (item.precoUnit < produtoMaisBarato) {
                produtoMaisBarato = item.precoUnit;
            }
        }
        if (totalDeItens > 4 && produtoMaisBarato > dezPorcento) {
            desconto += produtoMaisBarato;
            console.log(desconto);
        } else if (totalAPagar > 10000 && dezPorcento > produtoMaisBarato) {
            console.log(dezPorcento);
        }
    }

}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProdutoAoCarrinho(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProdutoAoCarrinho(novoTenis);

carrinho.calcularTotalDeItens();
carrinho.calcularTotalAPagar();
carrinho.calcularDesconto();




