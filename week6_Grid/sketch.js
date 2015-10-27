var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800
});

// Create a new Rune.Font object
var f = new Rune.Font("bebas.ttf");

f.load( function(err) {

  //draw "ain't it pretty"
  // Get a path of the text from the font
  // at x,y 80,300 and font size 150.
  var pathPretty = f.toPath("AIN'T  IT  PRETTY , ", 80, 300, 150)
    .fill('hsv', 110, 50, 90)
    .stroke(false);

  // We need to specifically add the new path to the stage,
  // as is wasn't created via the r.path() function.
  r.stage.add(pathPretty);

  // convert the path to polygons.
  var polysPretty = pathPretty.toPolygons({ spacing: 5 });

  // loop through the points and change them a little bit
  for(var i = 0; i < polysPretty.length; i++) {

    var polyPretty = polysPretty[i];
    polyPretty.fill(false)
              .stroke(false);

    for(var j = 0; j < polyPretty.vars.vectors.length; j++) {
      var vecPretty = polyPretty.vars.vectors[j];

      //while looping the points, draw ellipse at each point
      vecPretty.x += Rune.random(-3, 3);
      vecPretty.y += Rune.random(-3, 3);
      var circleX = polyPretty.vars.x + vecPretty.x;
      var circleY = polyPretty.vars.y + vecPretty.y;
      var circleD = Rune.random(2,8);
      var Circles = r.circle(circleX, circleY, circleD, circleD)
       .stroke(false)
       .fill(PrettyColor);

      var PrettyColor = new Rune.Color('hsv', Rune.random(330,360), Rune.random(0,50), 100);
    }
  }
  r.draw(); // "ain't it pretty" done!



  //draw "ain't it cool?"
  var pathCool = f.toPath("AIN'T  IT  COOL  ?", 80, 550, 150)
    .fill(true)
    .stroke(false);

  r.stage.add(pathCool);

  var polysCool = pathCool.toPolygons({ spacing: 3 });

  //loop the points and connect them with lines
  for(var h = 0; h < polysCool.length; h++) {
      var polyCool = polysCool[h];

        for(var k = 0; k < polyCool.vars.vectors.length; k++) {
          var vecCool = polyCool.vars.vectors[k];
              polyCool.fill(255)
              .stroke(true)
              .strokeWidth(0.2);

          

          var pointX = polyCool.vars.x + vecCool.x;
          var pointY = polyCool.vars.y + vecCool.y;


          var Lines = r.line(pointX, pointY, pointX+Rune.random(-5,5) , pointY+Rune.random(-5,15))
                       .strokeWidth(1)
                       .stroke(0);
          

          }

        }



  r.draw();

});