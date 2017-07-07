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

ShoppingList.prototype.removeItem = function(item){
  var index = this.items.indexOf(item);
   if(item === undefined && this.items.length > 0){
    this.items.pop();
    return;
  }
   if(item instanceof ShoppingListItem === false){
    throw new Error("Item is not sold at store");
  }
   if(index === -1){
    console.log("error");
    throw new Error("Item is not in Shopping List");
   }else{
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
