let canvas= document.querySelector('canvas')

canvas.width=window.innerWidth
canvas.height=window.innerHeight
const colors [black,white]
let ctx=canvas.getContext('2d')
ctx.fillstyle=colors.sort
function draw(){
    ctx.beginPath()
    ctx.arc(canvas.width/2,canvas.height/2,canvas.width/4,0,Math.PI)
    ctx.stroke()

}

draw()

window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    draw()
    }
)