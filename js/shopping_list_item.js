function ShoppingListItem(name, description){
   this.name = name;
   this.description = description;
   this.is_done = false;

 }
  ShoppingListItem.prototype.check =function(){
      this.is_done = true;
      return this.is_done;
    };

  ShoppingListItem.prototype.uncheck =function(){
      this.is_done = false;
      return this.is_done;
   };

  ShoppingListItem.prototype.render = function(){

      var newLi = document.createElement("li");
      newLi.className = "completed_" + this.is_done;

      var nameSpan = document.createElement("span");
      nameSpan.innerHTML = this.name;
      newLi.appendChild(nameSpan);

      var descriptionSpan = document.createElement("span");
      descriptionSpan.innerHTML = this.description;
      newLi.appendChild(descriptionSpan);

      return newLi;
  };



