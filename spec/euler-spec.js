import { Euler } from './../src/euler.js'

describe('Euler', function() {

  it('should return an array of multiples of 3 and 5', function() {
    var input = new Euler(10)
    expect(input.multiples()).toEqual(23)
  });

});
