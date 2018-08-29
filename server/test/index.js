var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('teste 2', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('#teste2()', function() {
it('displays some behaviour', function (done) {  
  browser.doesSomethingReturningAPromise()
    .then(function (result) {
      return browser.doesAnotherThingReturningAPromise();
    })
    .then(function (anotherResult) {
      anotherResult.should.be(someValue);
        done();
    })
    .fail(function (error){
      done(error);
    });
});
});