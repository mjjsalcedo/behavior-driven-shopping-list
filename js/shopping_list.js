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

ShoppingList.prototype.render = function(item){
  var pack = this.items;
  var makeUl = document.createElement("ul");

  if(pack.length === 0){
    throw new Error ("No item is in the Shopping List");
  } else {

    for (var i = 0; i < pack.length; i++) {
      var test = pack[i].render();
      makeUl.appendChild(test);

    }
  }
  return makeUl;
};