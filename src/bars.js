var height = 200;
var width = 1000;


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
    .duration(750)
    .attr('fill', function(d, i){ return 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')'; })
    .attr('height', function(d, i){ return d.height; })
    .attr('y', function(d, i){ return height - d.height; });

  //Enter rectangles for the first time
  rects.enter().append('rect')
    .attr('fill', function(d, i){ return 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')'; })
    .attr('x',function(d, i){ return i * 21; })
    .attr('y', function(d, i){ return height - d.height; })
    .attr('width', 20)
    .attr('height', function(d, i){ return d.height; });
};

var genVals = function(n) {
  var vals = [];
  for (var i = 0; i < n; i++) {
    vals.push({
      height: Math.random() * height,
      // rgb: 'rgb(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ')'
    });
  }
  return vals;
};

update(genVals(45));

setInterval(function(){ update(genVals(45)); }, 750);