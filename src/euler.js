export function Fibonacci(number) {
  this.number = number;
}

Fibonacci.prototype.generate = function() {
  var fib_array = [];
  var previous_first = 0, previous_second = 1, next = 1;
  while (previous_second + next <= this.number) {
    next = previous_first + previous_second;
    previous_first = previous_second;
    previous_second = next;
    fib_array.push(next);
  }
  console.log(fib_array);
  return fib_array;
  // for(var i = 1; i <= this.number; i++) {
  //   next =  previous_first + previous_second;
  //   previous_first = previous_second;
  //   previous_second = next;
  //   fib_array.push(next);
  // }
  // return fib_array;
};
