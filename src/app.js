import Circle from "./Circle";

const animation={
    canvas : document.querySelector('canvas'),
    circles : [],
    circlesCount : 100,
    ctx : null, //car on peut pas faire référence à d'autres propriétés lors de la déclaration
    mouse: {x:undefined,y:undefined,zoneSize:50},
    init(){
        this.ctx=this.canvas.getContext('2d') //this car on fait référence aux propriétés de l'objet
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        for (let i = 0; i < this.circlesCount; i++) {
            this.circles.push(new Circle(this.canvas, this.ctx))
            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth
                this.canvas.height = window.innerHeight
            })
            this.animate()
        }
    },
    animate(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.circles.forEach((circle)=>circle.update())
        //dire à chacun de nos cercles de se mettre à jour
        window.requestAnimationFrame(()=> {this.animate()});// la prochaine fois que tu rafraichis le code, c-a-d 60x/seconde, appelle cette fonction
        window.addEventListener('mousemove',(e)=>{
            this.mouse.x=e.x
            console.log('uhuhuhu')
            this.mouse.y=e.y//on utilise les coordonnées de l'évènement
        })
    }

}
animation.init();

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

