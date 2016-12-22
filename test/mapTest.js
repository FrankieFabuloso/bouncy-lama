const poop = require('../index.js')

var assert = require('assert');
describe('Array.map', function() {
  describe('#map()', function() {
    it('smarter version of forEach', function() {
      assert.deepEqual( [1, 2], poop.forEach([1, 2], function(value) {
        console.log(value);
      }))
      
    });
  });
});
