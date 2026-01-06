let col1 = "#404040";
let col2 = 160;
let col3 = "#757575"; //
let col4 = "#d6d6d6";
let col5 = "#1d1d1b";
let colback = "#565555";

function Particle(r, g, b, x, y, stw, spd) {
  this.xpos = x;
  this.ypos = y;
  this.speed = spd;
  this.pos = createVector(this.xpos, this.ypos);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = spd;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0.1);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.sw = stw;
    noFill();
    stroke(col1);
    strokeWeight(0.1);
    //ellipse(this.pos.x, this.pos.y, this.prevPos.x / 3, this.prevPos.y / 13);
    point(this.pos.x, this.pos.y);
    point(windowWidth - this.pos.x, this.pos.y);
    point(this.pos.x, windowHeight - this.pos.y);
    point(windowWidth - this.pos.x, windowHeight - this.pos.y);
    stroke(col2);
    strokeWeight(0.5);
    point(this.pos.x, this.pos.y / 1.3);
    point(windowWidth - this.pos.x, this.pos.y / 1.3);
    point(this.pos.x, windowHeight - this.pos.y / 1.3);
    point(windowWidth - this.pos.x, windowHeight - this.pos.y / 1.3);
    stroke(col3);
    strokeWeight(0.1);
    point(this.pos.x / 3, this.pos.y / 1.1);
    point(windowWidth - this.pos.x / 3, this.pos.y / 1.1);
    point(this.pos.x / 3, windowHeight - this.pos.y / 1.1);
    point(windowWidth - this.pos.x / 3, windowHeight - this.pos.y / 1.1);
    stroke(col4);
    strokeWeight(0.1);
    point(this.pos.x / 2, this.pos.y / 1.7);
    point(windowWidth - this.pos.x / 2, this.pos.y / 1.7);
    point(this.pos.x / 2, windowHeight - this.pos.y / 1.7);
    point(windowWidth - this.pos.x / 2, windowHeight - this.pos.y / 1.7);
    this.updatePrev();
  };
  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > windowWidth - 30) {
      this.pos.x = 30;
      this.updatePrev();
    }
    if (this.pos.x < 30) {
      this.pos.x = windowWidth - 30;
      this.updatePrev();
    }
    if (this.pos.y > windowHeight - 30) {
      this.pos.y = 30;
      this.updatePrev();
    }
    if (this.pos.y < 30) {
      this.pos.y = windowHeight - 30;
      this.updatePrev();
    }
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };
}

function Particle2(r, g, b, x, y, stw) {
  this.xpos = x;
  this.ypos = y;
  this.pos = createVector(this.xpos, this.ypos);
  this.vel = createVector(1000, 20);
  this.acc = createVector(20, 1000);
  this.maxspeed = 3;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0.1);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.sw = stw;
    noFill();
    stroke(col5);
    strokeWeight(this.sw);
    //ellipse(this.pos.x, this.pos.y, this.prevPos.x / 3, this.prevPos.y / 13);
    point(this.pos.x, this.pos.y);
    point(windowWidth - this.pos.x, this.pos.y);
    point(this.pos.x, windowHeight - this.pos.y);
    point(windowWidth - this.pos.x, windowHeight - this.pos.y);
    point(this.pos.x / 1.9, this.pos.y);
    point(windowWidth - this.pos.x / 1.9, this.pos.y);
    point(this.pos.x / 1.9, windowHeight - this.pos.y);
    point(windowWidth - this.pos.x / 1.9, windowHeight - this.pos.y);
    point(this.pos.x / 1.1, windowHeight - this.pos.y / 1.1);
    point(windowWidth - this.pos.x / 1.1, windowHeight - this.pos.y / 1.1);
    point(windowHeight / 2, windowWidth / 2);
    point(windowWidth / 2, windowHeight / 2);
    this.updatePrev();
  };
  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > windowWidth - 30) {
      this.pos.x = 30;
      this.updatePrev();
    }
    if (this.pos.x < 30) {
      this.pos.x = windowWidth - 30;
      this.updatePrev();
    }
    if (this.pos.y > windowHeight - 30) {
      this.pos.y = 30;
      this.updatePrev();
    }
    if (this.pos.y < 30) {
      this.pos.y = windowHeight - 30;
      this.updatePrev();
    }
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };
}
