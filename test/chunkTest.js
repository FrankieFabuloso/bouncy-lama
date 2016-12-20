const poop = require('../index.js')

var assert = require('assert');
describe('Array.chunk', function() {
  describe('#chunk()', function() {
    it('should return array of arrays of size passed in', function() {
      assert.deepEqual( [['a', 'b'], ['c', 'd']], poop.chunk(['a', 'b', 'c', 'd'], 2) );
      assert.deepEqual( [['a', 'b', 'c'], ['d']], poop.chunk(['a', 'b', 'c', 'd'], 3) );
    });
  });
});
