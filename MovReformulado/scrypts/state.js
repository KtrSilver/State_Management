export const estados = {
    PARADO_ESQUERDA: 0,
    PARADO_DIREITA: 1,
    SENTADO_ESQUERDA:2,
    SENTADO_DIREITA:3,
    CORRENDO_ESQUERDA: 4,
    CORRENDO_DIREITA: 5,
    PULANDO_ESQUERDA: 6,
    PULANDO_DIREITA: 7,
    CAINDO_ESQUERDA: 8,
    CAINDO_DIREITA: 9

}

class State{
    constructor(state){
        this.estado = estado
    }
}

export class ParadoEsquerda extends State {
    constructor(player){
        super('PARADO ESQUERDA')
        this.player = player
    }
    enter(){
        this.player.frameY = 0
        this.player.velocidade = 0
        this.player.maxFrame = 1;
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(estados.CORRENDO_DIREITA)
        else if(input === 'PRESS left') this.player.setState(estados.CORRENDO_ESQUERDA)
        else if(input === 'PRESS down') this.player.setState(estados.SENTADO_ESQUERDA)
        else if(input === 'PRESS up') this.player.setState(estados.PULANDO_ESQUERDA)

    }
}

export class ParadoDireita extends State {
    constructor(player){
        super('PARADO DIREITA')
        this.player = player
    }
    enter(){
        this.player.frameY = 0
        this.player.velocidade = 0
        this.player.maxFrame = 1;
    }
    handleInput(input){
        if(input === 'PRESS left') this.player.setState(estados.CORRENDO_ESQUERDA)
        else if(input === 'PRESS right') this.player.setState(estados.CORRENDO_DIREITA)
        else if(input === 'PRESS down') this.player.setState(estados.SENTADO_DIREITA)
        else if(input === 'PRESS up') this.player.setState(estados.PULANDO_DIREITA)

    }
}

export class SentadoEsquerda extends State {
    constructor(player){
        super('SENTANDO ESQUERDA')
        this.player = player
    }
    enter(){
        this.player.frameY = 4
        this.player.frameX = 1
        this.player.velocidade = 0
        this.player.maxFrame = 6;
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(estados.SENTADO_DIREITA)
        else if(input === 'RELEASE down') this.player.setState(estados.PARADO_ESQUERDA)

    }
}
export class SentadoDireita extends State {
    constructor(player){
        super('SENTANDO DIREITA')
        this.player = player
    }
    enter(){
        this.player.frameY = 3
        this.player.frameX = 1
        this.player.velocidade = 0
        this.player.maxFrame = 6;
    }
    handleInput(input){
        if(input === 'PRESS left') this.player.setState(estados.SENTADO_ESQUERDA)
        else if(input === 'RELEASE down') this.player.setState(estados.PARADO_DIREITA)

    }
}

export class CorrendoEsquerda extends State {
    constructor(player){
        super('CORRENDO ESQUERDA')
        this.player = player
    }
    enter(){
        this.player.frameY = 10
        this.player.velocidade = -this.player.velocidadeMax;
        this.player.maxFrame = 9
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(estados.CORRENDO_DIREITA)
        else if(input === 'RELEASE left') this.player.setState(estados.PARADO_ESQUERDA)
        else if(input === 'PRESS down') this.player.setState(estados.SENTADO_ESQUERDA)
        else if(input === 'PRESS up') this.player.setState(estados.PULANDO_ESQUERDA)

    }
}
export class CorrendoDireita extends State {
    constructor(player){
        super('CORRENDO DIREITA')
        this.player = player
    }
    enter(){
        this.player.frameY = 9
        this.player.velocidade = this.player.velocidadeMax;
        this.player.maxFrame = 9
    }
    handleInput(input){
        if(input === 'PRESS left') this.player.setState(estados.CORRENDO_ESQUERDA)
        else if(input === 'RELEASE right') this.player.setState(estados.PARADO_DIREITA)
        else if(input === 'PRESS down') this.player.setState(estados.SENTADO_DIREITA)
        else if(input === 'PRESS up') this.player.setState(estados.PULANDO_DIREITA)


    }
}
export class PulandoEsquerda extends State {
    constructor(player){
        super('PULANDO ESQUERDA')
        this.player = player
    }
    enter(){
        this.player.frameY = 5
        if(this.player.onGround()) this.player.vy -= 40
        this.player.velocidade = -this.player.velocidadeMax * 0.5
        this.player.maxFrame = 7

    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(estados.PULANDO_DIREITA)
        else if(this.player.onGround()) this.player.setState(estados.PARADO_ESQUERDA)
        else if (this.player.vy > 0) this.player.setState(estados.CAINDO_ESQUERDA)
        
    }
}

export class PulandoDireita extends State {
    constructor(player){
        super('PULANDO DIREITA')
        this.player = player
    }
    enter(){
        this.player.frameY = 4
        if(this.player.onGround()) this.player.vy -= 40
        this.player.velocidade = this.player.velocidadeMax * 0.5
        this.player.maxFrame = 7

    }
    handleInput(input){
        if(input === 'PRESS left') this.player.setState(estados.PULANDO_ESQUERDA)
        else if(this.player.onGround()) this.player.setState(estados.PARADO_DIREITA)
        else if (this.player.vy > 0) this.player.setState(estados.CAINDO_DIREITA)

    }
}

export class CaindoEsquerda extends State {
    constructor(player){
        super('CAINDO ESQUERDA')
        this.player = player
    }
    enter(){
        this.player.frameY = 8
        this.player.maxFrame = 5
        
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(estados.CAINDO_DIREITA)
        else if(this.player.onGround()) this.player.setState(estados.PARADO_ESQUERDA)
       
    }
}
export class CaindoDireita extends State {
    constructor(player){
        super('CAINDO DIREITA')
        this.player = player
    }
    enter(){
        this.player.frameY = 7
        this.player.maxFrame = 5
        

    }
    handleInput(input){
        if(input === 'PRESS left') this.player.setState(estados.CAINDO_ESQUERDA)
        else if(this.player.onGround()) this.player.setState(estados.PARADO_DIREITA)
       
    }
}