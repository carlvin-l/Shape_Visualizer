class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = [random(100, 255), random(100, 255), random(100, 255), 220];
        this.sizeNoiseOffset = random(10);
        this.rotation = random(TWO_PI);
        this.rotationSpeed = random(-0.02, 0.02);
    }

    update() {
        this.size = noise(this.sizeNoiseOffset + frameCount * 0.01) * 80 + 20;
        this.rotation += this.rotationSpeed;
        this.x += sin(frameCount * 0.01 + this.sizeNoiseOffset) * 0.5;
        this.y += cos(frameCount * 0.01 + this.sizeNoiseOffset) * 0.5;
    }
}

class Circle extends Shape {
    display() {
        fill(...this.color);
        ellipse(this.x, this.y, this.size);
    }
}

class Triangle extends Shape {
    display() {
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(...this.color);
        triangle(
            -this.size / 2, this.size / 2,
            this.size / 2, this.size / 2,
            0, -this.size / 2
        );
        pop();
    }
}

class Square extends Shape {
    display() {
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(...this.color);
        rectMode(CENTER);
        rect(0, 0, this.size, this.size);
        pop();
    }
}