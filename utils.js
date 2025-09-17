function createShapes(shapeType, num = 100) {
    let shapes = [];
    for (let i = 0; i < num; i++) {
        let x = random(width);
        let y = random(height);

        if (shapeType === "circle") {
            shapes.push(new Circle(x, y));
        } else if (shapeType === "triangle") {
            shapes.push(new Triangle(x, y));
        } else if (shapeType === "square") {
            shapes.push(new Square(x, y));
        } else if (shapeType === "mixed") {
            let r = random(["circle", "triangle", "square"]);
            if (r === "circle") shapes.push(new Circle(x, y));
            if (r === "triangle") shapes.push(new Triangle(x, y));
            if (r === "square") shapes.push(new Square(x, y));
        }
    }
    return shapes;
}

function drawHUD(shapeType) {
    push();
    fill(255);
    textAlign(LEFT, TOP);
    text("Controls:\n1 = Circles\n2 = Triangles\n3 = Squares\nM = Mixed\nR = Reset\n", 10, 10);
    text(`Current: ${shapeType}`, 10, 110);
    pop();
}