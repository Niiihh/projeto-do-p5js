function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('rgb(80,2,80)');
    stroke('yellow')
    fill('black')
    rect(mouseX, mouseY, 50, 100);
  }