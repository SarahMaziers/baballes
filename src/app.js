let canvas= document.querySelector('canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let ySpeed=2+Math.floor(Math.random()*5) //valeur comprise entre 2 et 6 car le math.floor arrondit vers le bas et math.random contient une valeur entre 0 et 1
let xSpeed=2+Math.floor(Math.random()*5)
const position={
    x:canvas.width/2,
    y:canvas.height/2
}
const radius= canvas.width/10

const colors=['#40A497','black','red']

let ctx=canvas.getContext('2d')
ctx.fillstyle=colors.sort(()=>0.5-Math.random()); //moyen de tirer un evaleur aléatoire dans un array

function draw(){
    ctx.beginPath()
    ctx.arc(position.x,position.y,radius,0,2*Math.PI)
    ctx.fill()
}

function animate(){
    if(position.y + radius > canvas.height || position.y - radius < 0){
        ySpeed=-ySpeed
    }
    if(position.x + radius > canvas.width || position.x - radius < 0){
        xSpeed=-xSpeed
    }
    position.y+=ySpeed
    position.x+=xSpeed
    ctx.clearRect(0,0,canvas.width,canvas.height) //on demande à Canvas de s'effacer sinon les cercles vont se dessiner les uns sur les autres
    draw();
    window.requestAnimationFrame(animate);
}

draw()
animate()

window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    animate()
    })