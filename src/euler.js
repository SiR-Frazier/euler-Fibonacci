export function Euler(number) {
  this.number = number;
}

Euler.prototype.multiples = function() {
  var array = [];
  for (var i = 1; i <= this.number; i += 1) {
    array.push(i);
  }

  var new_array = [];
  for (var j = 1; j < array.length; j++) {
    if ((j % 3 === 0) || (j % 5 === 0)) {
      new_array.push(j);
    }
  }
  return new_array;
};
