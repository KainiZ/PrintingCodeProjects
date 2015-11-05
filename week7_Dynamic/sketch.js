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

