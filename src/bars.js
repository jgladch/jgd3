var height = 200;
var width = 1000;

var vals = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

var canvas = d3.select('body').append('svg')
  .attr('class','canvas')
  .attr('width', width)
  .attr('height', height)

var update = function(data) {
  //Data Join
  var rects = canvas.selectAll('rect').data(data);

  //Update
  rects.transition()
    .duration(750)
    .attr('height', function(){ return Math.random() * height; });

  //Enter
  rects.enter().append('rect')
    .attr('x',function(d, i){ return i * 21; })
    .attr('y', 0)
    .attr('width', 20)
    .attr('height', function(){ return Math.random() * height; });
};

update(vals);

setInterval(function(){ update(vals); }, 750);