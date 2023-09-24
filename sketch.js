function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('white');
    stroke('black');
    randomSeed(110);

    for (let i = 0; i < 25; i += 1) {
        let xPos1 = 0; xPos1 <= width; xPos1 += random(30, width - 30)
        let yPos1 = 0; yPos1 <= height; yPos1 += random(30, height - 30)

        // Select a random point for connecting
        let xPos2 = random(0, width);
        let yPos2 = random(0, height);

        line(xPos1, yPos1, xPos2, yPos2);
    }
}
