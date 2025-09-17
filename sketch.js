let shapes = [];
let shapeType = "circle"; // default
let animationStarted = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    textFont("monospace");
    textSize(14);
    fill(255);

    // Show a start screen
    background(20);
    textAlign(CENTER, CENTER);
    text("Press ENTER or Click to Start", width / 2, height / 2);
}

function draw() {
    if (!animationStarted) return; // wait until user starts

    background(20, 30, 40, 50); // trails effect

    shapes.forEach(s => {
        s.update();
        s.display();
    });

    drawHUD(shapeType);
}

// Start animation on click or ENTER
function keyPressed() {
    if (!animationStarted && keyCode === ENTER) {
        startAnimation();
    } else {
        // existing controls
        let result = handleControls(key, shapeType, shapes);
        shapeType = result.shapeType;
        shapes = result.shapes;
    }
}

function mousePressed() {
    if (!animationStarted) {
        startAnimation();
    }
}

function startAnimation() {
    animationStarted = true;
    shapes = createShapes(shapeType);
}