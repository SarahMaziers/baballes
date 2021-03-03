class Circle {
    constructor (canvas,ctx) {
        this.ctx=ctx;
        this.canvas = canvas;
        this.speed = {
            x: -2 + (Math.random() * 5),
            y: -2 + (Math.random() * 5)
        };
        this.radius = 5+Math.random()*5; //entre 5 et 10
        this.position = {
            x: this.radius+Math.random()*(canvas.width-2*this.radius),
            y: this.radius+Math.random()*(canvas.height-2*this.radius)
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
        this.draw();

    }
    static get colors () {
        return ['#40A497', 'black', 'red'];
    }
}

export default Circle
