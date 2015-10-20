var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1100,
  debug: true,
});

//background
r.rect(0, 0, 800, 450)
 .fill(255)
 .stroke(false);


//Dick 1 mid point is 200

//tip
var DickTip1 = r.path(180, 150)
.curveTo(15, -50, 30, 0)
.closePath()
.fill(0)
.stroke(false);


//tube
r.rect(180, 150, 30, 90)
 .fill(0)
 .stroke(true);

//balls
r.ellipse(180, 240, 40, 40)
.fill(0)
.stroke(false);

r.ellipse(210, 240, 40, 40)
.fill(0)
.stroke(false);

//cut
r.rect(150, 180, 80, 4)
.fill(255)
.stroke(false)
.rotate(25, 160, 220);

r.line(150, 182, 213, 182)
.rotate(25, 160, 220);


//Dick 2 mid point is 600

//tongue
r.path(580, 105)
.curveTo(-40, 80, 0, 80)
.fill(false)
.stroke(0)
.strokeWidth(2);

r.path(610, 85)
.curveTo(40, 80, 0, 80)
.fill(false)
.stroke(0)
.rotate(45, 575,150)
.strokeWidth(2);

r.line(620,110,580, 195)
.strokeWidth(2);


//tip
var DickTip2 = r.path(575, 150)
.curveTo(15, -50, 30, 0)
.closePath()
.fill(0)
.stroke(false);

//tube
r.rect(575, 150, 30, 90)
 .fill(0)
 .stroke(true);

//balls
r.ellipse(575, 240, 40, 40)
.fill(0)
.stroke(false);

r.ellipse(605, 240, 40, 40)
.fill(0)
.stroke(false);

//water drop
var water = r.path(575, 160)
.curveTo(15, 20, 30, 0)
.fill(false)
.stroke(255)

r.path(575, 165)
.curveTo(15, 20, 30, 0)
.fill(false)
.stroke(255);

r.path(575, 170)
.curveTo(15, 25, 30, 0)
.fill(false)
.stroke(255);

r.path(575, 175)
.curveTo(15, 40, 30, 0)
.fill(false)
.stroke(255);





r.draw();