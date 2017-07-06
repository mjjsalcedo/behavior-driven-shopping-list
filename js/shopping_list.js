function ShoppingList(items){
  this.items = [];
}
ShoppingList.prototype.addItem = function(item){
    this.items.push(item);
};
ShoppingList.prototype.discardItem = function(item){
  var index = this.items.indexOf(item);
  this.items.splice(index, 1);
  return true;
};






  //   removeItem(item){
  //   var index = this.items.indexOf(item);
  //   this.items.splice(index, 1);
  //     return true;
  //   }
  // }
