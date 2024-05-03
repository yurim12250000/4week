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
        ctx.moveTo(this.x, this.y - 55);
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(
                this.x + Math.cos((Math.PI * 2 * i) / 5 - Math.PI / 2) * 25,
                this.y + Math.sin((Math.PI * 2 * i) / 5 - Math.PI / 2) * 25 - 30
            );
            ctx.lineTo(
                this.x + Math.cos((Math.PI * 2 * (i + 0.5)) / 5 - Math.PI / 2) * 12.5,
                this.y + Math.sin((Math.PI * 2 * (i + 0.5)) / 5 - Math.PI / 2) * 12.5 - 30
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

// 캔버스의 중앙 좌표 계산
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// 도형 생성
const shape = new Shape(centerX - 25, centerY - 25, 50, 'rgb(255, 0, 0)'); // 중앙에 위치하도록 수정

// 도형 그리기
shape.draw();