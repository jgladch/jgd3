var width = 960;
var height = 500;

var state = 1;
var letters = undefined;

var canvas = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
  .append('g')
    .attr('transform', 'translate(32,' + (height / 2) + ')');

function update(data) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var text = canvas.selectAll('text')
      .data(data, function(d,i){ return d;});

  // UPDATE
  // Update old elements as needed.
  text.attr('class', 'update')
    .transition()
      .duration(750)
      .attr('x',function(d, i){ return i * 32; });

  // ENTER
  // Create new elements as needed.
  text.enter().append('text')
      .attr('class', 'enter')
      .attr('y', -60)
      .attr('x', function(d, i) { return i * 32; })
      .attr('dy', '.35em')
      .text(function(d){ return d; })
    .transition()
      .duration(750)
      .attr('y', 0);

  // ENTER + UPDATE
  // Appending to the enter selection expands the update selection to include
  // entering elements; so, operations on the update selection after appending to
  // the enter selection will apply to both entering and updating nodes.
  text.text(function(d) { return d; });

  // EXIT
  // Remove old elements as needed.
  text.exit()
    .attr('class', 'exit')
    .transition()
    .duration(750)
    .attr('y', 60)
    .remove();
}

var switchText = function() {
  if (state === 0) {
    state++;
    return "jeff gladchun".split('');
  } else if (state === 1) {
    state++;
    return "jglad.ch".split('');
  } else if (state === 2) {
    state = 0;
    return "web developer".split('');
  }
};

// The initial display.
update("jeffgladchun".split(''));

//setInterval for switching state
setInterval(function(){ update(switchText()); }, 2000);