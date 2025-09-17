function handleControls(key, shapeType, shapes) {
    if (key === "1") {
        shapeType = "circle";
        shapes = createShapes(shapeType);
    } else if (key === "2") {
        shapeType = "triangle";
        shapes = createShapes(shapeType);
    } else if (key === "3") {
        shapeType = "square";
        shapes = createShapes(shapeType);
    } else if (key.toLowerCase() === "m") {
        shapeType = "mixed";
        shapes = createShapes(shapeType);
    } else if (key.toLowerCase() === "r") {
        shapes = createShapes(shapeType);
    }
    return { shapeType, shapes };
}