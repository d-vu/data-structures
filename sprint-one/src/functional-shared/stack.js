var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {storage: {}, length :0 }; 
  extend(instance, stackMethods);
  return instance;
};

var extend = function(original, objects) {
  for ( var key in objects) {
    original[key] = objects[key];
  }
  return original;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    if(this.length > 0){
      this.length--;
    }
    return this.storage[this.length];
  },

  size: function() {
    return this.length;
  }

};