

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.listOfNodes = [];


};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var aNode = {
    value: node,
    edge: {}
  };
  this.listOfNodes.push(aNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  for (var i = 0; i < this.listOfNodes.length && !found; i++) {
    if (this.listOfNodes[i].value === node) {
      found = true;
    }
  }
  return found;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.listOfNodes.length; i++) {
    if (this.listOfNodes[i].value === node) {
      this.listOfNodes.splice(i, 1);
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  for (var i = 0; i < this.listOfNodes.length; i++) {
    if (Object.keys(this.listOfNodes[i].edge).indexOf(toNode.toString()) !== -1) {
      found = true;
    }
  }
  return found;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.listOfNodes.length; i++) {
    if (this.listOfNodes[i].value === fromNode) {
      for (var j = 0; j < this.listOfNodes.length; j++) {
        if (this.listOfNodes[j].value === toNode) {
          this.listOfNodes[i].edge[j] = this.listOfNodes[j];
          this.listOfNodes[j].edge[i] = this.listOfNodes[i];
        } 
      }
    } 
  }

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.listOfNodes.length; i++) {
    if (this.listOfNodes[i].value === fromNode) {
      delete this.listOfNodes[i].edge[toNode.toString()].edge[i];
      delete this.listOfNodes[i].edge[toNode.toString()];
      return true;
    } 
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


