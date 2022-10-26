const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d")

const lC = canvas.width = 1024
const aC = canvas.height = 576

const teclado = {
    cima:false,
    direita:false,
    baixo:false,
    esquerda:false,
}

let jogador = new Jogador(teclado, c)
let blocos = [new Blocos(jogador)]

function animar(){
    requestAnimationFrame(animar)
    c.clearRect(0,0,lC,aC)

    blocos.forEach(bloco => {
        bloco.draw()
    });
    if(blocos[0].x < 0 - blocos[0].w )
    blocos.push(new Blocos(jogador))

    jogador.draw()

    c.beginPath();
    c.moveTo(0,144);
    c.lineTo(lC, 144)
    c.moveTo(lC, 288)
    c.lineTo(0, 288)
    c.moveTo(0, 432)
    c.lineTo(lC, 432)
    c.stroke()

}

animar()
