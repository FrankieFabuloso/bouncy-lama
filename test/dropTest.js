const poop = require('../index.js')

var assert = require('assert');
describe('Array.drop', function() {
  describe('#drop()', function() {
    it('should return values found in object path or undifined if no path found', function() {
      assert.deepEqual( [2, 3], poop.drop([1, 2, 3]) )
      assert.deepEqual( [3], poop.drop([1, 2, 3], 2) )
      assert.deepEqual( [], poop.drop([1, 2, 3], 5) )
    });
  });
});
