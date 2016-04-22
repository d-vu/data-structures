var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) { // When list is empty
      list.head = node;
      list.tail = node;
    } else if (list.head === list.tail) { // When list has 1 node
      list.head.next = node;
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

   

  //   if (list.head.value === target) {
  //     return true;
  //   } else {

  //   }
  // };

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
