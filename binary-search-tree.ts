// binary search tree data structure
/** */
class node1 {
    data;
    left;
    right;
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right
    }
  }
  
  class BST {
    root;
    constructor() {
      this.root = null
    }
  
    add(data) {
      const _node = this.root;
      if(!_node) {
        this.root = new node1(data);
        return;
      }
      else {
        const searchTree = (node) => {
          if(data < node.data) {
            if(node.left === null) {
              node.left = new node1(data);
              return;
            }
            else {
              return searchTree(node.left)
            }
          }
          else if (data > node.data) {
            if(!node.right) {
              node.right = new node1(data);
              return;
            }
            else {
              return searchTree(node.right);
            }
          }
          else {
            return null;
          }
        }
        return searchTree(_node);
      }
    }
  
    findMin() {
      if(!this.root) {
        return null;
      }
      else {
        let node = this.root.left;
        let minimum = node.data;
        while(node.left) {
          node = node.left;
          minimum = node.data
        }
        return minimum;
      }
    }
  
    findMax() {
      if(!this.root) {
        return null;
      }
      else {
        let node = this.root.right;
        let maximum = node.data;
        while(node.right) {
          node = node.right;
          maximum = node.data;
        }
        return maximum;
      }
    }

    find(data) {
      if(!this.root) {
        return null;
      }
      let node = this.root;
      while(node.data !== data) {
        if(data > node.data) {
          node = node.right
        }
        else {
          node = node.left;
        }
        if(!node) {
          return null;
        }
      }
      return node;
    }

    isPresent(data) {
      if(!this.root) {
        return false;
      }
      let node = this.root;
      while(node) {
        if (node.data === data) {
          return true;
        }
        else if(data > node.data) {
          node = node.right;
        }
        else {
          node = node.left;
        }
      }
      return false;
    }

    remove(data) {
      const removeNode = (node, data) => {
        if(!node) {
          return null;
        }
        if (data === node.data) {
          //node has no children
          if(node.left === null && node.right === null) {
            return null;
          }
          if (node.left === null) {
            return node.right;
          }
          if(node.right === null) {
            return node.left;
          }
          // node has two children
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        }
        else if(data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        }
        else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data)

    }

    minHeight(node = this.root) {
      if (node === null) {
        return -1
      };
      let left = this.minHeight(node.left);
      let right = this.minHeight(node.right);
      if(left < right) {
        return left + 1;
      }
      else {
        return right + 1;
      };
    }

    inOrder() {
      let node = this.root
      if(!node) {
        return null;
      }
      let array = new Array();
      let traverseTree = (node) => {
        node.left && traverseTree(node.left);
        array.push(node.data);
        node.right && traverseTree(node.right);
      }
      traverseTree(node);
      return array
    }

    preOrder() {
      let node = this.root;
      if(!node) {
        return null;
      }
      let array = new Array();
      let traverseTree = (node) => {
        array.push(node.data);
        node.left && traverseTree(node.left)
        node.right && traverseTree(node.right)
      }
      traverseTree(node);
      return array
    }

    levelOrder() {
      let node = this.root;
      let result = [];
      let Q = [];
      if(node) {
        Q.push(node)
        while(Q.length > 0) {
          node = Q.shift();
          result.push(node.data);
          if(node.left) {
            Q.push(node.left)
          };
          if(node.right) {
            Q.push(node.right)
          }
        }
        return result;
      }
      else {
        return null;
      } 
    }
  }

  
  let tree = new BST();
  tree.add(34)
  tree.add(5)
  tree.add(2)
  tree.add(60)
  tree.add(40)
  tree.add(70)
  tree.add(39)
  tree.add(45)
  tree.add(69)
  tree.add(80)
 // console.log(tree)
  console.log(tree.minHeight());
 // console.log(tree.findMin())
 // console.log(tree.findMax())
  //tree.remove(310)
  //console.log(tree)
  //console.log(tree.inOrder())