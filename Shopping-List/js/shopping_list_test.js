var expect = require('chai').expect;
describe('ShoppingListItem', function(){

    class ShoppingListItem {

    }

  var item = new ShoppingListItem();

  it('should be a function', function(){
    expect(ShoppingListItem).to.be.a('function');
  });
});