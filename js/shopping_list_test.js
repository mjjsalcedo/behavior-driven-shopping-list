

var expect = chai.expect;
var should = chai.should();

describe('Shopping List Item Class', function(){

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
         expect(item.check).to.be.a('function');
      });

      it('should equal true', function(){
        expect(item.check()).to.equal(true);
      });

    });

    describe('.uncheck', function(){
      it('should be a method', function(){
         expect(item.uncheck).to.be.a('function');
      });
      it('should equal false', function(){
        expect(item.uncheck()).to.equal(false);
      });
    });

    describe('.render', function(){


      it('should be a method', function(){
        expect(item.render).to.be.a('function');
      });

      it('should have an li element', function(){
        var newItem = item.render();
        var testItem = newItem.querySelectorAll('span');
        expect(testItem).to.have.length(2);
      });

      it('should have a span for item name', function(){
        var newItem = item.render();
        var testItem = newItem.querySelectorAll('span');
         expect(testItem[0].innerText).to.equal('bread');
      });

      it('should have a span for item description', function(){
        var newItem = item.render();
        var testItem = newItem.querySelectorAll('span');
         expect(testItem[1].innerText).to.equal('wheat');
      });

    });

});


describe('Shopping List Class', function(){

  var list = null;

  list = new ShoppingList();

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

    describe('.render', function(){
      it('should be a method', function(){
        expect(list.render).to.be.a('function');
      });

      it('should return a message if there is nothing in the Shopping List', function(){

        var list = new ShoppingList();

        expect(function() {
          list.render();
        }).to.throw();
      });

      it('should return all items in the Shopping List',function(){

        var list = new ShoppingList();
        var bread = new ShoppingListItem("bread", "wheat");
        var avocado = new ShoppingListItem("avocado", "fruit?");

        list.addItem(bread);
        list.addItem(avocado);


        list.render();
        var newItem = list.render();
        var testUl = newItem.querySelectorAll('li');
        var testLi = newItem.querySelectorAll('span');

        console.log("render!", list.render());
        console.log(testUl);
        expect(testUl).to.have.length(2);
        expect(testLi[0].innerText).to.equal('bread');

      });
    });
});



     /* it('should have a span for item name', function(){
        var newItem = item.render();
        var testItem = newItem.querySelectorAll('span');
         expect(testItem[0].innerText).to.equal('bread');
      });
*/