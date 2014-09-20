var width = 700;
var height = 250;

var jg = 'jeffgladchun'.split('');
var jgladch = 'jglad.ch'.split('');

var canvas = d3.select('body').append('svg')
  .attr('height', height)
  .attr('width', width)
  .append('g')
    .attr('transform', 'translate(32,' + (height / 2) + ')');

var update = function(data) {
  //Data Join
  var letters = canvas.selectAll('text')
    .data(data);

  //Update
  letters.attr('class','update');
  
  //Enter
  letters.enter().append('text')
    .attr('class', 'enter')
    .attr('x', function(d, i) { return i * 32; })
    .attr('dy', '.35em');

  //Enter + Update
  letters.text(function(d){ return d; });

  //Exit
  letters.exit().remove();
};

console.log(jg);
update(jg);