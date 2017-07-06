var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function(){

  var spoon = ShoppingListItem;

  it('should be a function', function(){
    expect(spoon).to.be.a('function')
  });

  /*it('should have a name', function(){
    var bob = new Human('Bob')
    expect(bob.name).to.equal('Bob')
    expect(bob.name).to.not.equal('Alice')
  });

  it('should have a method sayHello()', function(){
    var bob = new Human('Bob')
    expect(bob.sayHello()).to.equal('Hello');
  })*/
});