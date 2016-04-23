var BinarySearchTree = function(value) {
  
  var tree = Object.create(methods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var methods = {};

methods.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  var iterator = this;
  var helper = function(head) {
    if (value > head.value) {
      if (head.right === null) {
        head.right = newNode;
      } else {
        helper(head.right);
      }
    }
    if ( value < head.value ) {
      if (head.left === null) {
        head.left = newNode;
      } else {
        helper(head.left);
      }
    }
  };
  helper(iterator);

};

methods.contains = function(value) {
  var found = false;
  if (value === this.value) {
    found = true;
  } else if (value > this.value) {
    if (this.right) {
      found = (this.right.contains(value) || found);
    }
  } else if (value < this.value) {
    if (this.left) {
      found = (this.left.contains(value) || found);
    }
  } 

  return found;

};

methods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 
  if (this.right) {
    this.right.depthFirstLog(callback);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
