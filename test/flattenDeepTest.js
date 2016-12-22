const poop = require('../index.js')

var assert = require('assert');
describe('Array.flattenDeep', function() {
  describe('#flattenDeep()', function() {
    it('Flatten it hella deep ;)', function() {
      assert.deepEqual( [1, 2, 3, 4, 5], poop.flattenDeep( [1, [2, [3, [4]], 5]] ) )
      assert.deepEqual( [0, 1, 2, 3, 10, 11, 12, 99, 100],
        poop.flattenDeep( [0,[1,2,3],[10,[11,12],99],100] ) )
    });
  });
});
