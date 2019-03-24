function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  mouseX = width / 2;
  mouseY = height / 2;
}

function draw() {
  background(20, 3, 100);

  //yagasuri
  const dx_1 = 30;
  const dx_2 = dx_1 / 4;
  const dx = (dx_1 * 2 + dx_2) * 2;
  const dy = 150;

  fill(map(mouseX, 0, width, 320, 390) % 360, 30, 90);

  for (let i = -1; i < width * 2 / dx; i++) {
    for (let j = -1; j < height * 2 / dy; j++) {
      const px = i * dx;
      const py = j * dy;
      if (j % 2 === 0) {

        beginShape(QUADS);

        vertex(px - dx_1 * 2 - dx_2, py);
        vertex(px - dx_1 * 2 - dx_2, py + dy);
        vertex(px - dx_1 - dx_2, py + dy + dx_1);
        vertex(px - dx_1 - dx_2, py + dx_1);

        vertex(px - dx_1, py + dx_1);
        vertex(px - dx_1, py + dy + dx_1);
        vertex(px, py + dy);
        vertex(px, py);

        vertex(px, py + dy);
        vertex(px, py + dy * 2);
        vertex(px + dx_1, py + dy * 2 - dx_1);
        vertex(px + dx_1, py + dy - dx_1);

        vertex(px + dx_1 + dx_2, py + dy - dx_1);
        vertex(px + dx_1 + dx_2, py + dy * 2 - dx_1);
        vertex(px + dx_1 * 2 + dx_2, py + dy * 2);
        vertex(px + dx_1 * 2 + dx_2, py + dy);

        endShape();
      } else {
        beginShape(QUADS);

        vertex(px - dx_1 - dx_2, py + dx_1);
        vertex(px - dx_1 - dx_2, py + dy + dx_1);
        vertex(px - dx_1, py + dy + dx_1);
        vertex(px - dx_1, py + dx_1);

        vertex(px + dx_1, py + dy * 2 - dx_1);
        vertex(px + dx_1, py + dy - dx_1);
        vertex(px + dx_1 + dx_2, py + dy - dx_1);
        vertex(px + dx_1 + dx_2, py + dy * 2 - dx_1);

        endShape();
      }
    }
  }

  textAlign(CENTER, CENTER);
  textSize(160);
  textFont("serif");
  fill(20, 3, 30);
  text("矢\n絣", width / 2, height / 3);
  textSize(40);
  text("YAGASURI", width / 2, height / 3 + 250);
}
