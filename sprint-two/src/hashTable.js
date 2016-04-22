var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); 
  // if ( !this._storage.storage.get(index) ) {
  //   this._storage.storage[i].push([]);
  // }
  // this._storage.storage[i][1] =
  if ( !this._storage.get(index) ) {
    this._storage.set(index, []); 
  }
  var tuple = [k, v];
  // debugger
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if ( bucket[i][0] === k ) {
      bucket[i][1] = v;
    }
  }
  this._storage.get(index).push(tuple);
  //[,[], , , , , , ]
  

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var key = bucket[i][0];
    if ( key === k ) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if ( bucket[i][0] === k ) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


