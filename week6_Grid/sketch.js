var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  debug: false
});


//Create a rectangle to fill the entire screen
//and a smaller rectangle on top
var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 20,
  columns: 3,
  rows: 3
});



var greyBg = r.path(50, 50)
              .lineTo(0,300)
              .lineTo(500,300)
              .lineTo(500,0)
              .closePath()
              .fill(240)
              .stroke(false);

//yellow
var path = r.path(330, 300)
            .lineTo(0, 450)
            .lineTo(221,450)
            .lineTo(221,-10)
            .closePath()
            .stroke(false)
            .fill('hsv', 50, 80, 100);


//red
var path = r.path(50, 300)
            .lineTo(0, 450)
            .lineTo(350,450)
            .lineTo(400,30)
            .closePath()
            .stroke(false)
            .fill('hsv', 1, 80, 100);


//green
var path = r.path(350,150)
            .lineTo(0,50)
            .lineTo(100, 50)
            .lineTo(100,0)
            .fill('hsv', 100, 100, 70)
            .stroke(false)
            .rotate(30, 350, 150);

r.draw();

var title = new Rune.Font("bebas.ttf");

title.load ( function(err) {
  var pathDas = title.toPath ("DAS", 75, 180, 120)
                     .fill(10)
                     .stroke(false);

  var pathCapital = title.toPath ("KAPITAL", 75, 280, 120)
                     .fill(10)
                     .stroke(false);

  var pathKarl = title.toPath ("Karl", 75, 450, 120)
                     .fill(10)
                     .stroke(false);


  var pathMarx = title.toPath ("Marx", 75, 550, 120)
                     .fill(10)
                     .stroke(false);


  
  r.stage.add(pathDas);
  r.stage.add(pathCapital);
  r.stage.add(pathKarl);
  r.stage.add(pathMarx);



  r.draw();
});


r.text("FROM CAPITALISTIC EXPLOITATION", 75, 620)
  .fill(10)
  .stroke(false)
  .fontSize(22)
  .textAlign("left")
  .fontFamily("Helvetica")
  .fontWeight("bold")

r.text("TO COMMUNIST REVOLUTION", 75, 650)
  .fill(10)
  .stroke(false)
  .fontSize(22)
  .textAlign("left")
  .fontFamily("Helvetica")
  .fontWeight("bold")

r.draw();

