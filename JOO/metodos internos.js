// Deve usar esta forma caso queira utilizar variaveis MÉTODOS INTERNOS
function Carro() {

    var variavelSecreta = "segredo"
    var metodoInterno = function() {
        console.log("Só pode ser acessado dentro do objeto")
    }

    this.velocidade = 0;
    this.ligado = false;
    this.nivelCombustivel = 100;
    this.qtdPortas = 4;
    this.potencia = 100;

    this.ligar = function() {
        if (this.ligado) {
            console.log('Carro já está ligado')
        } else {
            this.ligado = true
        }
    }
    this.andar = function() {
        console.log(variavelSecreta)
        metodoInterno()
        if(!this.ligado) {
            this.ligar
        }
        this.velocidade = 40
    }
}

let carro = new Carro();
carro.andar()
