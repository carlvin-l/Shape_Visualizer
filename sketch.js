let shapes = [];
let shapeType = "circle";

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    textFont("monospace");
    textSize(14);

    let input = prompt("Choose a shape: circle, triangle, square, or mixed");
    if (input) {
        input = input.toLowerCase().trim();
        if (["circle", "triangle", "square", "mixed"].includes(input)) {
            shapeType = input;
        }
    }
    shapes = createShapes(shapeType);
}

function draw() {
    background(20, 30, 40, 50);
    shapes.forEach(s => {
        s.update();
        s.display();
    });
    drawHUD(shapeType);
}

function keyPressed() {
    let result = handleControls(key, shapeType, shapes);
    shapeType = result.shapeType;
    shapes = result.shapes;
}