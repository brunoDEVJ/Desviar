class Blocos {
    constructor(player) {
        this.jogador = player
        this.y = Math.random()* canvas.height
        this.w = 150
        this.h = 70
        this.x = canvas.width + this.w
        this.velocidade = Math.random() * 3 +1
        this.inicialX = canvas.width + this.w
        this.cor = `rgb(${Math.random() *255},${Math.random() *255},${Math.random() *255})`
        this.perdeu = false
    }   
   
    gerenciador() {
        if (
            this.jogador.x <= this.x + this.w &&
            this.jogador.x + this.jogador.largura >= this.x &&
            this.jogador.y + this.jogador.altura >= this.y &&
            this.jogador.y <= this.y + this.h
          ){
           this.perdeu = true 
          }

          if(this.perdeu){
            this.x = this.inicialX
            alert('você perdeu')
          }
    }

    draw(){
        this.gerenciador()

        if(this.x < 0 - this.w){
        this.y = Math.random()* canvas.height
        this.x = canvas.width + this.w
        this.velocidade = Math.random() * 3 
        }

        c.fillStyle = this.cor
        this.x -= this.velocidade
        c.fillRect(this.x,this.y,this.w,this.h)
        
        
    }
}