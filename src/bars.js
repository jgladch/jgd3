var height = 200;
var width = 1000;

var name = ['jeff gladchun'];


var canvas = d3.select('body').append('svg')
  .attr('class','canvas')
  .attr('width', width)
  .attr('height', height)

//D3 update function
var update = function(data) {
  //Data join - select rectangles in the svg canvas
  var rects = canvas.selectAll('rect').data(data);

  //Update existing rectagles with new values
  rects.transition()
    .duration(1500)
    .attr('fill', function(d, i){ return d.rgb; })
    .attr('height', function(d, i){ return d.height; })
    .attr('y', function(d, i){ return height - d.height; });

  //Enter rectangles for the first time
  rects.enter().append('rect')
    .attr('fill', function(d, i){ return d.rgb; })
    .attr('x',function(d, i){ return i * 21; })
    .attr('y', function(d, i){ return height - d.height; })
    .attr('width', 20)
    .attr('height', function(d, i){ return d.height; });

  genText(name);
};

var genVals = function(n, distance) {
  var vals = [];
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  for (var i = 0; i < n; i++) {
    vals.push({
      height: Math.random() * height,
      rgb: 'rgb(' + (red + (i * distance)) + ', ' + (green + (i * distance)) + ', ' + (blue + (i * distance)) + ')',
    });
  }
  return vals;
};

var genText = function(data) {
  //Data join / select
  var letters = canvas.selectAll('text').append('text').data(data);

  //Update


  //Enter
  letters.enter().append('text')
    .attr('x', 50)
    .attr('y', 50)
    .html(function(d, i) { return d; });

  //Exit
};

update(genVals(45, 5));

setInterval(function(){ update(genVals(45, 5)); }, 2000);