let canvas= document.querySelector('canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
//2+Math.floor(Math.random()*5) //valeur comprise entre 2 et 6 car le math.floor arrondit vers le bas et math.random contient une valeur entre 0 et 1
const circles = []
const circlesCount = 100
//const radius= canvas.width/10
let ctx=canvas.getContext('2d')
const circle= {
    position: null, // quand on déclare des propriétés on ne peut pas prendre des valeurs d'autres propriétés, d'abord la déclarer
    speed: 0,
    radius: null,
    colors: ['#40A497', 'black', 'red'],
    color: '',
    init () {
        this.speed = {
            x: 2 + Math.floor(Math.random() * 5),
            y: 2 + Math.floor(Math.random() * 5)
        }
        this.radius = canvas.width / 10
        this.position = {
                x: canvas.width / 2,
                y: canvas.height / 2
            }
        this.color = this.colors.sort(() => 0.5 - Math.random())[0] //moyen de tirer un evaleur aléatoire dans un array
        this.update()
        },
            draw()
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height) //on demande à Canvas de s'effacer sinon les cercles vont se dessiner les uns sur les autres

            ctx.fillstyle = this.color
            ctx.beginPath()
            ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
            ctx.fill()

        },
        update()
        {
            if (this.position.y + this.radius > canvas.height || this.position.y - this.radius < 0) {
                this.speed.y = -this.speed.y
            }
            if (this.position.x + radius > canvas.width || this.position.x - radius < 0) {
                this.speed.x = -this.speed.x
            }
            this.position.y += this.speed.y
            this.position.x += this.speed.x
            this.draw();
            window.requestAnimationFrame(()=> {this.update()});// la prochaine fois que tu rafraichis le code, c-a-d 60x/seconde, appelle cette fonction
        }

    }


circle.init();

window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
})
//ctx.fillstyle=circle.colors.sort(()=>0.5-Math.random()); //moyen de tirer un evaleur aléatoire dans un array



//function animate(){
  //  if(circle.position.y + radius > canvas.height || circle.position.y - radius < 0){
      //  circle.speed.y=-circle.speed.y
  //  }
 //   if(circle.position.x + radius > canvas.width || circle.position.x - radius < 0){
      //  circle.speed.x=-circle.speed.x
  //  }
   // circle.position.y+=circle.speed.y
   // circle.position.x+=circle.speed.x
  //  ctx.clearRect(0,0,canvas.width,canvas.height) //on demande à Canvas de s'effacer sinon les cercles vont se dessiner les uns sur les autres
    //draw();
   // window.requestAnimationFrame(animate);
//}

//draw()
//animate()

