export function Euler(number) {
  this.number = number;
}

Euler.prototype.multiples = function() {
  var array = [];
  for (var i = 1; i <= this.number; i += 1) {
    array.push(i);
  }
  console.log(array);
  return array;
  // if (this.number % 3 === 0 || this.number % 5 === 0 )
  //   return array.push(this.number)
};
