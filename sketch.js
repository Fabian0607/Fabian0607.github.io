function setup() {
  createCanvas(600, 400);
  background(255, 0, 0);
  fill(255, 255, 0)
  circle(width / 2, height / 2, 300);
  fill(0)
  ellipse(width / 2 - 50, height / 2 - 50, 55, 70)
  ellipse(width / 2 + 50, height / 2 - 50, 55, 70);
  strokeWeight(5)
  noFill();
  arc(width / 2, height / 2 + 50, 80, 50, 0, PI);
}