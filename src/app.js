let canvas= document.querySelector('canvas')
let ySpeed=3
const position={
    x:canvas.width/2,
    y:canvas.width/2
}
const radius= canvas.width/10
canvas.width=window.innerWidth
canvas.height=window.innerHeight
const colors=['#00000']
let ctx=canvas.getContext('2d')
ctx.fillstyle=colors.sort(()=>0.5-Math.random());
function draw(){
    ctx.beginPath()
    ctx.arc(position.canvas.width/2,position.canvas.height/2,radius,0,Math.PI)
    ctx.fill()
}

draw()

function animate(){
    if(position.y + radius > canvas.height OR position.y - radius < 0){
        ySpeed=-ySpeed
    }
    position.y+=ySpeed
    ctx.clearRect(0,0,canvas.width,canvas.height)
    draw();
    window.requestAnimationFrame(animate);
}
animate()

window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    draw()
    })