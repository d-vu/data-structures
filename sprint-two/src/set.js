var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage === undefined) {
    this._storage = [];
  }
  this._storage.push(item);

};

setPrototype.contains = function(item) {
  return (this._storage.indexOf(item) !== -1);
};

setPrototype.remove = function(item) {
  
  if (this.contains(item)) {
    var index = this._storage.indexOf(item);
    this._storage.splice(index, 1);
  }
  

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
