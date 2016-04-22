var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(instance, extendedObj) {
  for (var key in extendedObj) {
    instance[key] = extendedObj[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(target) {
  this.children.push(Tree(target));
};

treeMethods.contains = function(target) {
  var found = false;


  // var helper = function(parent) {
  //   for (var i = 0; i < parent.children.length; i++) {
  //     if (parent.children[i].value === target) {
  //       found = true;
  //     }
  //   }
  //   for (var i = 0; i < parent.children.length; i++) {

  //     helper(parent.children[i]);
  //   }
  // };
  // helper(this);
  if ( this.value === target ) {
    found = true;
  } else {
    for (var i = 0; i < this.children.length && !found; i++) {
      found = this.children[i].contains(target);
    }
  }

  // for (var i = 0; i < this.children.length && !found; i++) {
  //   if (this.children[i].value === target) {
  //     found = true;
  //     return found;
  //   } else {
  //     return this.children[i].contains(target);
  //   }
  return found;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
