var r = new Rune({
  container: "#canvas",
  width: 200,
  height: 350,
  debug: false
});

//hair

var hairColor = new Rune.Color('hsv', 80, 70, 80);

var Quad = r.group (0,0);

var xpos1 = Rune.random(0,180);
var ypos2 = Rune.random(0,330);
var xpos3 = Rune.random(0,180);
var ypos4 = Rune.random(0,330);

var offsets = Array(-2, -5, -10, -15, -20, 2, 5, 10, 15, 20);

//var yoffset = Array(-2, -5, -10, -15, -20 2, 5, 10, 15, 20);
var xoffset = offsets[Math.floor(Math.random()*offsets.length)];
var yoffset = offsets[Math.floor(Math.random()*offsets.length)];

r.line(xpos1, 20 , 20, ypos2, Quad).stroke(hairColor);
r.line(20, ypos2, xpos3, 300, Quad).stroke(hairColor);
r.line(xpos3, 300, 180, ypos4, Quad).stroke(hairColor);
r.line(180, ypos4 , xpos1, 20, Quad).stroke(hairColor);

for (var i = 1; i<=6 ; i ++) {
	Quad.copy().move(xoffset*i,yoffset*i);
}

//draw the eye

var eyeUp = r.path(40, 180)
 		   .curveTo(60,60, 120, 0)
           .strokeWidth(1)
           .fill(255);

var eyeDown = r.path(40,180)
 		   .curveTo(60,-60, 120, 0)
           .strokeWidth(1)
           .fill(255);

var eyeColor = new Rune.Color('hsv', 20, 70, 90);

var eyeBall = r.circle(100, 180, 30,30)
			   .stroke(true)
			   .strokeWidth(1)
			   .fill(eyeColor);



 r.draw();


//load name
var nameFont = new Rune.Font("bebas.ttf");

nameFont.load(   function(err) {
	var name= nameFont.toPath( "Lotus", 150, 100, 100)
	r.stage.add(name);

	r.draw();
});
