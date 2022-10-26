class Jogador {
    constructor(teclado, c){
        this.teclado = teclado;
        this.ctx = c;
        this.vel=4;
        this.largura= 100;
        this.altura=40;
        this.x=0;
        this.y=(this.ctx.canvas.height/2) -  (this.altura/2);
        this.inicioX = this.x;
        this.inicioY = this.y;
    }

    movimento(){
        if(this.teclado.cima)
        {
            if(this.y > 0)
            {
                this.y -= this.vel
            }
        }
        if(this.teclado.direita)
        {
            if(this.x < (this.ctx.canvas.width/2) - this.largura)
            {
                this.x += this.vel
            }
        }
        if(this.teclado.baixo)
        {
            if(this.y < this.ctx.canvas.height - this.altura)
            {
                this.y += this.vel
            }
        }
        if(this.teclado.esquerda)
        {
            if(this.x > 0)
            {
                this.x -= this.vel
            }
        }
    }
    
    draw(){
        this.movimento()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}