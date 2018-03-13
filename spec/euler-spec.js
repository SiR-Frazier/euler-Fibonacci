import { Fibonacci } from './../src/euler.js'

describe('Fibonacci', function() {

  it('should return an array of fibonacci numbers up to the input', function() {
    var input = new Fibonacci(10)
    expect(input.generate()).toEqual([1,2,3,5,8])
  });

});
