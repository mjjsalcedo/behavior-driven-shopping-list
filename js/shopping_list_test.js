

var expect = chai.expect;
var should = chai.should();

describe('Shopping List Item Class', function(){

  var list = null;

  beforeEach(function(){
    list =  new ShoppingListItem("bread", "wheat");
  });

  it('should be a function', function(){
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property called "name"', function(){
    expect(list).to.have.a.property('name');
    expect(list.name).to.be.a('String');
  });

  it('should have a property called "description"', function(){
    expect(list).to.have.a.property('description');
    expect(list.description).to.be.a('String');
  });

  it('should have a property "is_done"', function(){
    expect(list).to.have.a.property('is_done');
    expect(list.is_done).to.equal(false);
  });

    describe('.check', function(){
      it('should be a method', function(){
         expect(list.check).to.be.a('function');
      });

      it('should equal true', function(){
        expect(list.check()).to.equal(true);
      });

    });

    describe('.uncheck', function(){
      it('should be a method', function(){
         expect(list.uncheck).to.be.a('function');
      });
      it('should equal false', function(){
        expect(list.uncheck()).to.equal(false);
      });
    });

    describe('.render', function(){
      it('should be a method', function(){

      expect(list.render).to.be.a('function');
      });

      it('should have an li element', function(){

      expect(document.querySelector('#mocha')).to.contain('li');
      });

    });

});


describe('Shopping List Class', function(){

  var list = null;

  beforeEach(function(){
    list =  new ShoppingList("bread", "wheat");

  });

  it('should be a function', function(){
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property called "items"', function(){
    expect(list).to.have.a.property('items');
    expect(list.items).to.be.an('Array');
  });

    describe('.addItem', function(){

      it('should be a function',function(){
        expect(list.addItem).to.be.a('function');
      });

      it('should add item to list', function(){

        var list = new ShoppingList();
        var bread = new ShoppingListItem("bread", "wheat");

        list.addItem(bread);

        list.items.should.contain(bread);
      });

      it('should throw error if not an instance of Shopping List Item',function(){
        expect(function() {
          list.addItem('banana');
        }).to.throw();

      });
    });

    describe('.removeItem', function(){

      var cucumber = new ShoppingListItem("cucumber","green");

      it('should be a method', function(){
        expect(list.removeItem).to.be.a('function');
      });

      it('should throw error if not an instance of Shopping List Item', function(){
        expect(function() {
          list.removeItem('potato');
        }).to.throw();
      });

      it('should remove last item in Shopping List',function(){
        var list = new ShoppingList();
        var bread = new ShoppingListItem("bread", "wheat");
        var avocado = new ShoppingListItem("avocado", "fruit?");

        list.addItem(bread);
        list.addItem(avocado);

        list.removeItem();
        expect(list.items).to.deep.equal([bread]);
      });

      it('should remove Shopping List Item from Shopping List', function(){

        var list = new ShoppingList();
        var bread = new ShoppingListItem("bread", "wheat");
        var avocado = new ShoppingListItem("avocado", "fruit?");

        list.addItem(bread);
        list.addItem(avocado);

        list.removeItem(avocado).should.equal(true);
        list.items.should.contain(bread);
        list.items.should.not.contain(avocado);
      });
    });
});

