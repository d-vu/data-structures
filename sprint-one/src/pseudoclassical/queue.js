var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var listOfKeys = Object.keys(this.storage);
  var target = listOfKeys[[listOfKeys.length - 1]] + 1;
  this.storage[target] = value;
};

Queue.prototype.dequeue = function() {
  if ( this.size() > 0 ) {
    var firstKey = Object.keys(this.storage)[0];
    var firstKeyValue = this.storage[firstKey];
    delete this.storage[firstKey];
    return firstKeyValue;
  }
};

Queue.prototype.size = function() {
  var length = Object.keys(this.storage).length;
  return length;
};



