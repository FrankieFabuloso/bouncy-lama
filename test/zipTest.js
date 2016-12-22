const poop = require('../index.js')

var assert = require('assert');
describe('Array.zip', function() {
  describe('#zip()', function() {
    it('XYZ bro XYZ', function() {
      assert.deepEqual( [['a', 1, true], ['b', 2, false]], poop.zip(['a', 'b'], [1, 2], [true, false]) )
    });
  });
});
