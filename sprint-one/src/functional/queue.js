var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keyId = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[keyId] = value;
    keyId++;
  };

  someInstance.dequeue = function() {
    var key = Object.keys(storage)[0];
    var temp = storage[key];
    delete storage[key];
    return temp;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;



};



