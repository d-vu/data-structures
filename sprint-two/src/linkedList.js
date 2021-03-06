var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) { // When list is empty
      list.head = node;
      list.tail = node;
    } else { // When list has more than 1 node
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    var found = false;
    var currentNode = list.head;
    while ( currentNode !== null && !found) {
      if (currentNode.value === target) {
        found = true;
      } 
      currentNode = currentNode.next;
    }
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
