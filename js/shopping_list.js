class ShoppingList{

    constructor(items){
      this.items = [];
    }

    addItem(item){
      this.items.push(item);
    }

    removeItem(item){
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
      return true;
    }
  }
