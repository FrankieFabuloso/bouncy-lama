const poop = require('../index.js')

var assert = require('assert');
describe('AT', function() {
  describe('#at()', function() {
    it('should return values found in object path or undifined if no path found', function() {
      const obj = { 'a': [{ 'b': { 'c': 3 } }, 4] }
      assert.deepEqual( [3, 4], poop.at( obj, ['a[0].b.c', 'a[1]'] ) )
      assert.deepEqual( [1], poop.at([[[1]]],[ '[0][0][0]' ]) )
        assert.deepEqual([ 'poop', undefined ], poop.at( {a: 'poop'},['a', '']) )
    });
  });
});
