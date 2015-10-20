var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 400,
  debug: true,
});





//Set up variables attached to your class like this  
var Cat = function() {  
	this.backDropColor;
	this.catSkinColor;
	this.innerEarColor;
	this.noseColor;

}



// x=50, y=50
// Create functions for your class like this
Cat.prototype.draw = function(x, y) {  

//background
r.rect(x, y, 300, 300)
 .stroke(true)
 .fill(this.backDropColor)
 .strokeWidth(2);


//cat ears - outter fill
var Ears = 
r.path(x+70,y+130)
 .lineTo(20,-80)
 .lineTo(80,0)
 .lineTo(140,-80)
 .lineTo(160,0)
 .fill(this.catSkinColor)
 .strokeWidth(2);


 //cat ears - inner fill
var innerEars = 
r.path(x+70,y+150)
 .lineTo(20,-80)
 .lineTo(80,0)
 .lineTo(140,-80)
 .lineTo(160,0)
 .fill(this.innerEarColor)
 .strokeWidth(2)
 ;

 //cat face
var catFace = 
r.ellipse(x+150, y+180, 200, 180)
 .fill(this.catSkinColor)
 .strokeWidth(2);

//eyes
var eyeLeft = 
r.path(x+80,y+150)
 .curveTo(20,40,40,0)
 .strokeWidth(2)
 .closePath()
 .fill(255,255,0);

var eyeRight = 
	eyeLeft.copy().move(100,0,true).strokeWidth(2);

var eyeCenterLeft =
r.ellipse(x+100,y+155,10,10)
.fill(255,0,0)
.strokeWidth(2);

var eyeCenterRight = 
 	eyeCenterLeft.copy().move(100,0,true).strokeWidth(2);

//nose
var nose = 
r.path(x+150,y+200)
 .lineTo(10,-20)
 .lineTo(-10,-20)
 .closePath()
 .fill(this.noseColor)
 .strokeWidth(2);

r.line(x+150,y+200,x+150,y+210).strokeWidth(2);
r.line(x+150,y+210,x+160,y+220).strokeWidth(2);
r.line(x+150,y+210,x+140,y+220).strokeWidth(2);



//beard
var i;
for (i = 0; i <=3; i++) {
	r.line(x+40, y+180+i*5, x+70, y+180+i*5)
	.strokeWidth(2);
}

for (i = 0; i <=3; i++) {
	r.line(x+230, y+180+i*5, x+260, y+180+i*5)
	.strokeWidth(2);
}
 

}


//the ugly cat is full bright
var cat1 = new Cat();
var base1 = Rune.random(0,360)
cat1.backDropColor = new Rune.Color('hsv',base1, 100, 50);
cat1.catSkinColor = new Rune.Color('hsv', base1+120, 100, 50);
cat1.innerEarColor = new Rune.Color('hsv', base1+120, 100, 20);
cat1.noseColor = new Rune.Color('hsv', base1+480, 100, 20);

cat1.draw(50,50);




//the beautiful cat is crayon colors
var cat2 = new Cat();
var base2 = Rune.random(0,360);

cat2.backDropColor = new Rune.Color('hsv', base2, 30, 100);
cat2.catSkinColor = new Rune.Color('hsv', base2+120, 30, 100);
cat2.innerEarColor = new Rune.Color('hsv', base2+120, 50, 80);
cat2.noseColor = new Rune.Color('hsv', base2+480, 50, 80);

cat2.draw(450,50);




r.draw();