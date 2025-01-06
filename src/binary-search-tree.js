const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addNode(node.left, data);
      }
      if(data > node.data) {
        node.right = addNode(node.right, data);
      }

      return node;
    }

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    function hasNode(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(data < node.data) {
        return hasNode(node.left, data);
      }
      if(data > node.data) {
        return hasNode(node.right, data);
      }

      return false;
    }

    return hasNode(this.rootNode, data);
  }

  find(data) {
    function searchNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        return searchNode(node.left, data);
      }
      if(data > node.data) {
        return searchNode(node.right, data);
      }

      return null;
    }

    return searchNode(this.rootNode, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if(!node) {
        return null;
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          return node.right;
        }
        if(!node.right) {
          return node.left;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }

        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if(!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};