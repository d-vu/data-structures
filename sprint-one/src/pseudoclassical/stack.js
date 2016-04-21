var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  if (this.size() > 0) {
    var temp = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return temp;
  }
};

Stack.prototype.size = function() {
  var length = Object.keys(this.storage).length;
  return length;
};



