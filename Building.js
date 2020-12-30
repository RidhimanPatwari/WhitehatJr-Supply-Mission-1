class Building {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = "white";

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      stroke(Math.round(random(1, 255)));
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  