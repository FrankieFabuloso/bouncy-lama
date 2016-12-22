const poop = require('../index.js')

var assert = require('assert');
describe('Array.join', function() {
  describe('#join()', function() {
    it('when two become one', function() {
      assert.equal( 'a~b~c', poop.join(['a', 'b', 'c'], '~') )
    });
  });
});
