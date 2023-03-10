const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já esta ligado.")
        } else {
            this.ligado = true;
            console.log("Carro ligado. Velocidade: 0.");
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            console.log("Carro desligado. Velocidade: 0.");
        }
    },
    acelerar: function () {
        if (this.ligado) {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`)
        } else {
            console.log("Não é possível acelerar um carro desligado.");
        }
    },
    desacelerar: function () {
        if (this.ligado) {
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        } else {
            console.log("Não é possível desacelerar um carro desligado.");
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
