var inc = fxrandRange(20, 40, 0.1);
var scl = fxrandRange(100, 200, 1);
var magv = fxrandRange(1, 17, 1);
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var particles2 = [];
var flowfield;
var magv;
var cr = fxrandRange(0, 200, 1);
var cg = fxrandRange(100, 110, 1);
var cb = fxrandRange(200, 250, 1);
var dr = fxrandRange(0, 100, 1);
var dg = fxrandRange(150, 200, 1);
var db = fxrandRange(10, 150, 1);
var indexk = 0;
var sw1 = fxrandRange(0.1, 0.5, 0.1);
var sw2 = fxrandRange(0.1, 0.5, 0.1);
let speed2 = fxrandRange(10, 30, 10);

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 200; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      (fxrand() * i) / 5 + windowWidth / 3,
      (fxrand() * i) / 3 + windowHeight / 3,
      sw1,
      10
    );
  }
  for (i = 0; i < 300; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      (fxrand() * i) / 2 + windowWidth / 8,
      (fxrand() * i) / 5 + windowHeight / 7,
      sw2,
      10
    );
  }
  // background(235, 215, 141);
  push();
  blendMode(LIGHTEST);
  background(0);
  pop();
}

function draw() {
  if (indexk > 150) {
    noLoop();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      flowfield[index] = v;
      var angle = xoff * zoff;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(magv);
      xoff += inc;
      // stroke(255, 130);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(0.1);
      // line(0, 0, scl, 0);
      // pop(); //fill(r);

      //rect(scl * x, scl * y, scl, scl);
    }
    yoff += inc;
    zoff += 8;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  for (var i = 0; i < particles2.length; i++) {
    particles2[i].follow(flowfield);
    particles2[i].update();
    particles2[i].edges();
    particles2[i].show();
  }
  push();
  blendMode(LIGHTEST);
  rectMode(RADIUS);
  fill(255, 0.6 * sin(millis() * 2000));
  noStroke();
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );
  pop();
  indexk = indexk + 1;
  //console.log(indexk);
  stroke(0);
  strokeWeight(20);
  rect(10, 10, windowWidth - 20, windowHeight - 20);
  stroke(0);
  strokeWeight(20);
  rect(20, 20, windowWidth - 40, windowHeight - 40);
}
function windowResized() {
  background(255);
  resizeCanvas(windowWidth, windowHeight);
  indexk = 0;
  loop();
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 200; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      (fxrand() * i) / 5 + windowWidth / 3,
      (fxrand() * i) / 3 + windowHeight / 3,
      sw1,
      speed2
    );
  }
  for (i = 0; i < 600; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      (fxrand() * i) / 2 + windowWidth / 8,
      (fxrand() * i) / 5 + windowHeight / 7,
      sw2,
      i
    );
  }
  push();
  rectMode(RADIUS);
  fill(255, 0.6 * sin(millis() * 2000));
  noStroke();
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );
  pop();
  indexk = indexk + 1;
  //console.log(indexk);
  stroke(0);
  strokeWeight(20);
  rect(10, 10, windowWidth - 20, windowHeight - 20);
  stroke(0);
  strokeWeight(20);
  rect(20, 20, windowWidth - 40, windowHeight - 40);
}

function fxrandRange(min, max, step) {
  value = Math.round((fxrand() * (max - min)) / step);
  return value * step + min;
}

window.$fxhashFeatures = {
  CHAR: magv,
  INT: inc,
  FLO: scl,
};
