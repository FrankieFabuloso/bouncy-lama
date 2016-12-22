const poop = require('../index.js')

var assert = require('assert');
describe('Array.indexOf', function() {
  describe('#indexOf()', function() {
    it('the number', function() {
      assert.equal( 3, poop.indexOf([1, 2, 1, 2], 2, 2) )
      assert.equal( 1, poop.indexOf([1, 2, 1, 2], 2) )
    });
  });
});
