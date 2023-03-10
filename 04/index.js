const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos = [
            {
                tipo: "Depósito",
                valor
            }
        ]
        console.log(`${this.historicos[this.historicos.length - 1].tipo} de R$${(this.historicos[this.historicos.length - 1].valor) / 100} realizado para o cliente: ${this.nome}`);
    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else {
            this.saldo -= valor
            this.historicos = [
                {
                    tipo: "Saque",
                    valor
                }
            ]
            console.log(`${this.historicos[this.historicos.length - 1].tipo} de R$${(this.historicos[this.historicos.length - 1].valor) / 100} realizado para o cliente: ${this.nome}`);
        }
    },

    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: $${this.saldo / 100} \nHistórico:`);
        for (let i = 0; i < this.historicos.length; i++) {
            console.log(`${this.historicos[i].tipo} de $${this.historicos[i].valor / 100}`);
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();
