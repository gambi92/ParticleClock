class Point {
  constructor(x, y, pointWeight) {
    this.x = x;
    this.y = y;
    this.activated = false;
    this.pointWeight=pointWeight;

   
  }

  activate() {
    this.activated = true;
  }

  deactivate() {
    this.activated = false;
  }

  move(x = undefined, y = undefined) {
    if (x == undefined || y == undefined) {
      this.x += random(-0.5, 0.5);
      this.y += random(-0.5, 0.5);
    } else {
      this.x = x;
      this.y = y;
    }
  }

  display() {
    noStroke();
    if (this.activated) fill('rgba(100%, 100%, 100%, 1)');
    else fill('rgba(100%, 100%, 100%, 0.1)');
    ellipse(this.x, this.y, this.pointWeight);
  }

}