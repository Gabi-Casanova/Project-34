class Star {
  constructor(x, y, img) {
    var options = {
      isStatic: true
    };
    this.x = x;
    this.y = y;
    this.image = img
    this.image.resize(0, 0);
    this.image.resize(55, 55);
    //this.collected = false;
    this.body = Bodies.circle(this.x, this.y, 5, options);
    World.add(world, this.body);
  }

  display() {
    if (!this.collected) {
      imageMode(CENTER);
      image(this.image, this.x, this.y);
    }
  }

  isCollided(cannonball) {
    if (dist(cannonball.x, cannonball.y, this.x, this.y) < cannonball.r + 10) {
      //this.collected = true;
      return true;
    }
    return false;
  }
}