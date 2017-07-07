function ShoppingList(items){
  this.items = [];
}

ShoppingList.prototype.addItem = function(item){
  if(item instanceof ShoppingListItem === false){
    throw new Error("Item not in inventory");
  }else{
    return this.items.push(item);
  }
};

ShoppingList.prototype.discardItem = function(item){
  if(item instanceof ShoppingListItem === false){
    throw new Error("Item not in inventory");
  }else{
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    return true;
  }
};






  //   removeItem(item){
  //   var index = this.items.indexOf(item);
  //   this.items.splice(index, 1);
  //     return true;
  //   }
  // }
