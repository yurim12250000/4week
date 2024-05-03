const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Shape {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw() {
        // 테두리 색상 설정
        ctx.strokeStyle = 'black';

        // 별 그리기
        ctx.beginPath();
        ctx.moveTo(80, -70); // 별의 위치를 왼쪽 상단으로 고정
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(
                50 + Math.cos((Math.PI * 2 * i) / 5 - Math.PI / 2) * 25,
                50 + Math.sin((Math.PI * 2 * i) / 5 - Math.PI / 2) * 25 - 30
            );
            ctx.lineTo(
                50 + Math.cos((Math.PI * 2 * (i + 0.5)) / 5 - Math.PI / 2) * 12.5,
                50 + Math.sin((Math.PI * 2 * (i + 0.5)) / 5 - Math.PI / 2) * 12.5 - 30
            );
        }
        ctx.closePath();
        ctx.fillStyle = 'yellow'; // 별의 색상 설정
        ctx.fill();
        ctx.stroke(); // 테두리 그리기

        // 하트 그리기
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size / 3);
        ctx.quadraticCurveTo(this.x, this.y, this.x + this.size / 3, this.y);
        ctx.quadraticCurveTo(this.x + this.size / 2, this.y, this.x + this.size / 2, this.y + this.size / 4);
        ctx.quadraticCurveTo(this.x + this.size / 2, this.y, this.x + this.size * 3 / 4, this.y);
        ctx.quadraticCurveTo(this.x + this.size, this.y, this.x + this.size, this.y + this.size / 4);
        ctx.quadraticCurveTo(this.x + this.size, this.y + this.size / 2, this.x + this.size * 3 / 4, this.y + this.size * 3 / 4);
        ctx.lineTo(this.x + this.size / 2, this.y + this.size);
        ctx.lineTo(this.x + this.size / 4, this.y + this.size * 3 / 4);
        ctx.quadraticCurveTo(this.x, this.y + this.size / 2, this.x, this.y + this.size / 3);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke(); // 테두리 그리기
    }
}

class Enemy {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.angle = Math.atan2(shape.y - this.y, shape.x - this.x);
        this.velocity = { x: Math.cos(this.angle) * this.speed, y: Math.sin(this.angle) * this.speed };
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }
}

const shape = new Shape(canvas.width / 2 - 25, canvas.height / 2 - 25, 50, 'rgb(255, 0, 0)');
const enemies = [];

function spawnEnemies() {
    if (Math.random() < 0.03) {
        const radius = Math.random() * 10 + 5;
        let x, y;
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? -radius : canvas.width + radius;
            y = Math.random() * canvas.height;
        } else {
            x = Math.random() * canvas.width;
            y = Math.random() < 0.5 ? -radius : canvas.height + radius;
        }
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        const speed = Math.random() * 3 + 2;
        const enemy = new Enemy(x, y, radius, color, speed);
        enemies.push(enemy);
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shape.draw();
    spawnEnemies();
    enemies.forEach((enemy, index) => {
        enemy.update();
        if (enemy.x + enemy.radius < 0 || enemy.x - enemy.radius > canvas.width || enemy.y + enemy.radius < 0 || enemy.y - enemy.radius > canvas.height) {
            enemies.splice(index, 1);
        }
    });
}

animate();