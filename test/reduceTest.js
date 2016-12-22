const poop = require('../index.js')

var assert = require('assert');
describe('Array.reduce', function() {
  describe('#reduce()', function() {
    it('all for one', function() {
      assert.equal( 3, poop.reduce([1, 2],
        function(sum, n) {
        return sum + n;
      }, 0) )
      assert.deepEqual( { '1': ['a', 'c'], '2': ['b'] }, poop.reduce( { 'a': 1, 'b': 2, 'c': 1 },
            function(result, value, key) {
              (result[value] || (result[value] = [])).push(key);
              return result;
            }, {})
      )
    })
  })
})
