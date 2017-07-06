function ShoppingListItem(name, description){
   this.name = name;
   this.description = description;
   this.is_done = false;

 }
    ShoppingListItem.prototype.check=function(){
      this.is_done = true;
      return this.is_done;
    };

  ShoppingListItem.prototype.uncheck=function(){
      this.is_done = false;
       return this.is_done;

   };