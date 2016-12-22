const poop = require('../index.js')

var assert = require('assert');
describe('Number.floor', function() {
  describe('#floor()', function() {
    it('floor the F-ing number roid style', function() {
      assert.equal( 4, poop.floor(4.006)       )
      assert.equal( 0.04, poop.floor(0.046, 2) )
      assert.equal( 4000, poop.floor(4060, -2) )
    });
  });
});
