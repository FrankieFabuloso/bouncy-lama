const poop = require('../index.js')

var assert = require('assert');
describe('Array.forEach', function() {
  describe('#forEach()', function() {
    it('the stupid version of map', function() {
      const fartBucket = function(value) {
        console.log(value);
      }
      assert.deepEqual( [1, 2], poop.forEach([1, 2], fartBucket) )

    });
  });
});
