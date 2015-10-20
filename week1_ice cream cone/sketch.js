var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1100,
  debug: true
});

r.triangle(300, 400, 550, 400, 425, 900)
  .fill(0)
  .stroke(0)


for(var i = 0; i < 275 ; i=i+20 ) {

r.ellipse(425, 350, 275 - i, 275 - i)
  .fill(255)
  .stroke(0);
}

//another thing!
r.rect(300, 410, 250, 100)
  .fill(0)
  .stroke(255)

r.draw();