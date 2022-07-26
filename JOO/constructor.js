// Criando classes
class Carro{
    velocidade = 0
    ligado = false
    nivelCombustivel = 100
    cor;

    // Método Constructior - É CHAMADO QUANDO UM OBJETO NOVO É CRIADO
    constructor(cor) {
        console.log('carro ligado')
        this.cor = cor
    }

    ligar() {
        if(this.ligado) {
            console.log('Carro já está ligado')
        }else {
            this.ligado = true
        }
    }
    andar() {
        if(!this.ligado) {
            this.ligar()
        }
        this.velocidade = 40
    }
}


let carro1 = new Carro("verelho") //Chamando o constructior
carro1.andar()
console.log(carro1.ligado)
console.log(carro1.velocidade)
console.log(carro1.cor)

let carro2 = new Carro("azul") // Chamando o constructor
console.log(carro2.ligado)
console.log(carro2.velocidade)
console.log(carro2.cor)
