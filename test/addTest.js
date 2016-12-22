const poop = require('../index.js')

var assert = require('assert');
describe('ADD', function() {
  describe('#add()', function() {
    it('should return sum of two passed in values', function() {
      assert.equal(3, poop.add(1,2));
    });
  });
});
