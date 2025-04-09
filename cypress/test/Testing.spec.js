import * as chai from 'chai/index.js'
const {calc} = require('../app/calculator.js');
//const chai = NodeJS.require('chai');


//const chai = require('chai');
const expect = chai.expect;



// Unit Test
describe('add()', function() {
  it('should return the sum of two numbers', function() {
    const result = calc.add(2, 3);
    expect(result).to.equal(5);  // Assertion using Chai
  });

  it('should return a negative sum when adding negative numbers', function() {
    const result = calc.add(-2, -3);
    expect(result).to.equal(-5);
  });
});

