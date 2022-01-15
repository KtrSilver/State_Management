import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight, JumpingLeft, JumpingRight, FallingLeft, FallingRight } from "./state.js"

export default class Player {
    constructor(largura_tela, altura_tela){
        this.largura_tela = largura_tela
        this.altura_tela = altura_tela
        this.estado = [new StandingLeft(this), new StandingRight(this), new SittingLeft(this), new SittingRight(this),
        new RunningLeft(this), new RunningRight(this), new JumpingLeft(this), new JumpingRight(this), new FallingLeft(this), new FallingRight(this)]
        this.estadoAtual = this.estado[1]
        
        //imagem do personagem
        this.image = document.getElementById('hollowImg')
        //tamanho do recorte
        this.larguraPersonagem = 100
        this.alturaPersonagem = 80
        //posicao da imagem
        this.x = this.largura_tela/2 - this.larguraPersonagem/2
        this.y = distancia_chao
        //frame da imagem
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 6;

        //movimento horizontal
        this.velocidade = 0
        this.velocidadeMax = 5;
        //movimento vertical
        this.vy = 0
        this.gravidade = 1.8
        
        //fps
        this.fps = 30
        this.frameTimer = 0
        this.frameInterval = 1000/this.fps
    }
    draw(context, deltaTime){
        //calculo dos fps
        if(this.frameTimer > this.frameInterval){
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
            this.frameTimer = 0

        }else{
            this.frameTimer += deltaTime
        }
        
        //desenhar Imagem do personagem cortada na posicao certa
        context.drawImage(this.image,this.larguraPersonagem * this.frameX, this.alturaPersonagem * this.frameY, this.larguraPersonagem, this.alturaPersonagem,
            this.x, this.y, this.larguraPersonagem, this.alturaPersonagem )
    }
    update(input){
        this.estadoAtual.handleInput(input)
        //movimento horizontal
        this.x += this.velocidade
        if(this.x <=0) this.x = 0
        else if (this.x >= this.largura_tela-this.larguraPersonagem) this.x = this.largura_tela - this.larguraPersonagem
        
        //movimento vertical
        this.y += this.vy
        if(!this.noChao()){
            this.vy += this.gravidade//se nao estiver no chao o efeito da gravidade faz efeito
        }else{
            this.vy = 0
        }
        if(this.y > distancia_chao) this.y  = distancia_chao
    
    }
    setState(state){
        this.estadoAtual = this.estado[state]
        this.estadoAtual.enter()
    }
    noChao(){
        return this.y >= distancia_chao
    }
}