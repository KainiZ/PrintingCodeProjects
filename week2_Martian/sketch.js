var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1100,
  debug: true,
});

//background
r.rect(0, 0, 850, 1100)
 .fill(0)
 .stroke(false);


//earth
var earth = r.ellipse(640, 200, 50, 50)
 .fill(255)
 .stroke(false);

//Mars
var Mars = r.ellipse(-150, 1600, 2800, 2800)
 .fill(255)
 .stroke(false);



//poor guy

 //shadow
 r.triangle(450, 800, 450, 900, 750, 900)
  .fill(0)
  .stroke(false)
  .rotate(120,425,800);

//head
r.ellipse(450, 800, 30, 30)
 .fill(255)
 .stroke(true)
 .rotate(120, 425, 800);

//torso		
r.rect(435, 815, 30, 50)
 .fill(255)
 .stroke(true)
 .rotate(120, 425, 800);

//legs
r.rect(435, 865, 10, 25)
 .fill(255)
 .stroke(true)
 .rotate(120, 425, 800);
r.rect(455, 865, 10, 25)
 .fill(255)
 .stroke(true)
 .rotate(120, 425, 800);




r.draw();