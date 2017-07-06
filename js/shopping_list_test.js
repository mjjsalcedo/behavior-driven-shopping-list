// var chai   = require('chai');
console.log('shopping_list_test loaded!')
var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem Class', function(){

  var item = null;

  beforeEach(function(){
    item =  new ShoppingListItem("bread", "wheat");

  });

  it('should be a function', function(){
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property called "name"', function(){
    expect(item).to.have.a.property('name');
    expect(item.name).to.be.a('String');
  });

  it('should have a property called "description"', function(){
    expect(item).to.have.a.property('description');
    expect(item.description).to.be.a('String');
  });

  it('should have a property "is_done"', function(){
    expect(item).to.have.a.property('is_done');
    expect(item.is_done).to.equal(false);
  });

  describe('.check', function(){
  it('should be a method', function(){

    var item = new ShoppingListItem("bread", "wheat");
    expect(item.check()).to.equal(true);
  });
});

describe('.uncheck', function(){
  it('should be a method', function(){

    var item = new ShoppingListItem("bread", "wheat");
    expect(item.uncheck()).to.equal(false);
  });
});

describe('.render', function(){
  it('should be a method', function(){

    var item = new ShoppingListItem("bread", "wheat");
    expect(item.render()).to.equal(false);
  });
});

});


describe('ShoppingList Class', function(){

  var item = null;

  beforeEach(function(){
    item =  new ShoppingList("bread", "wheat");

  });

  it('should be a function', function(){
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property called "items"', function(){
    expect(item).to.have.a.property('items');
    expect(item.items).to.be.an('Array');
  });

  describe('.addItem', function(){
  it('should be a method', function(){

    var item = new ShoppingList();
    var bread = new ShoppingListItem("bread", "wheat");

    item.addItem(bread);

    item.items.should.contain(bread);
  });
  });

  describe('.discardItem', function(){
  it('should be a method', function(){

    var item = new ShoppingList();
    var bread = new ShoppingListItem("bread", "wheat");
    var avocado = new ShoppingListItem("avocado", "fruit?");

    item.addItem(bread);
    item.addItem(avocado);

    item.discardItem(avocado).should.equal(true);
    item.items.should.contain(bread);
    item.items.should.not.contain(avocado);

  });

});
});

