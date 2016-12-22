const poop = require('../index.js')

var assert = require('assert');
describe('Array.drop', function() {
  describe('#head()', function() {
    it('brain', function() {
      assert.equal( 1, poop.head([1, 2, 3]) )
    });
  });
});
