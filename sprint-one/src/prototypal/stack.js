var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // var instance = {storage: {}, length :0 }; 
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0;
  return instance;
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



