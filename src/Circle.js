class Circle {
    constructor (animation) {//canvas,ctx,mouse
        this.mouse=animation.mouse;
        this.ctx=animation.ctx;
        this.canvas = animation.canvas;
        this.speed = {
            x: -2 + Math.random() * 2,
            y: -2 + Math.random() * 2,
        };
        this.radius = 5+Math.random()*5; //entre 5 et 10
       this.minRadius=this.radius; //taille de départ et donc minimum
        this.position = {
            x: this.radius+Math.random()*(this.canvas.width-2*this.radius),
            y: this.radius+Math.random()*(this.canvas.height-2*this.radius)
        };
        this.color = Circle.colors.sort(() => 0.5 - Math.random())[0]; //moyen de tirer un evaleur aléatoire dans un array
        this.update();
    }

    draw(){
        this.ctx.fillstyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    update(){
        if (this.position.y + this.radius > this.canvas.height || this.position.y - this.radius < 0) {
            this.speed.y = -this.speed.y;
        }
        if (this.position.x + this.radius > this.canvas.width || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x;
        }
        this.position.y += this.speed.y;
        this.position.x += this.speed.x;
        //interact with the mouse
        if(this.position.y >= this.mouse.y - this.mouse.zoneSize/2 && this.position.y <= this.mouse.y + this.mouse.zoneSize/2 && this.position.x > this.mouse.x - this.mouse.zoneSize/2 && this.position.x < this.mouse.x + this.mouse.zoneSize/2 && this.radius<Circle.maxRadius){
        this.radius+=1
        }else if(this.radius>this.minRadius){
            this.radius-=1
        }
        this.draw();

    }

    static get colors () {
        return ['#40A497', 'black', 'red'];
    }
    static get maxRadius(){
        return 30;
    }
}

export default Circle
