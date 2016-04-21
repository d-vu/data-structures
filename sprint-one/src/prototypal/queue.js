var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.length = 0;
  instance.counter = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
    this.length++;
  },
  dequeue: function() {
    var firstKey = Object.keys(this.storage)[0];
    var firstInLine = this.storage[firstKey];
    
    delete this.storage[firstKey];
    if ( this.length > 0 ) {
      this.length--;
    }
    return firstInLine;
  },
  size: function() {
    return this.length;
  }
};


