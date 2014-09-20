var width = 700;
var height = 250;

var canvas = d3.select('body').append('svg')
  .attr('height', height)
  .attr('width', width)
  .append('g');

var update = function(data) {
  //Data Join
  var letters = canvas.selectAll('text')
    .data(data, function(d, i){ return d;});

  //Update
  letters.

  //Enter
};