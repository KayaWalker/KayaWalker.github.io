// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
    update() {
        if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
        }
    
        if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
        }
    
        if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
        }
    
        if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
        }
    
        this.x += this.velX;
        this.y += this.velY;
    }
}

const balls = [];

while (balls.length < 25) {
    const size = random(10,20)
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-5,5),
        random(-5,5),
        randomRGB(),
        size
    );

    balls.push(ball);
}

function loop() {
    ctx.fillStyle = "rbga(0,0,0,0.25)";
    ctx.fillRect(0,0,width,height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
    }

    requestAnimationFrame(loop);
}

loop();

// const testBall = new Ball(100, 100, 2, 2, "red", 10);
// testBall.draw();

// const testBall1 = new Ball(250, 700, 2, 2, "blue", 10);
// testBall1.draw();

// const testBall2 = new Ball(500, 350, 2, 2, "aquamarine", 10);
// testBall2.draw();



