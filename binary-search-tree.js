// binary search tree data structure
/** */
var node1 = /** @class */ (function () {
    function node1(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return node1;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.add = function (data) {
        var _node = this.root;
        if (!_node) {
            this.root = new node1(data);
            return;
        }
        else {
            var searchTree_1 = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new node1(data);
                        return;
                    }
                    else {
                        return searchTree_1(node.left);
                    }
                }
                else if (data > node.data) {
                    if (!node.right) {
                        node.right = new node1(data);
                        return;
                    }
                    else {
                        return searchTree_1(node.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree_1(_node);
        }
    };
    BST.prototype.findMin = function () {
        if (!this.root) {
            return null;
        }
        else {
            var node = this.root.left;
            var minimum = node.data;
            while (node.left) {
                node = node.left;
                minimum = node.data;
            }
            return minimum;
        }
    };
    BST.prototype.findMax = function () {
        if (!this.root) {
            return null;
        }
        else {
            var node = this.root.right;
            var maximum = node.data;
            while (node.right) {
                node = node.right;
                maximum = node.data;
            }
            return maximum;
        }
    };
    BST.prototype.find = function (data) {
        if (!this.root) {
            return null;
        }
        var node = this.root;
        while (node.data !== data) {
            if (data > node.data) {
                node = node.right;
            }
            else {
                node = node.left;
            }
            if (!node) {
                return null;
            }
        }
        return node;
    };
    BST.prototype.isPresent = function (data) {
        if (!this.root) {
            return false;
        }
        var node = this.root;
        while (node) {
            if (node.data === data) {
                return true;
            }
            else if (data > node.data) {
                node = node.right;
            }
            else {
                node = node.left;
            }
        }
        return false;
    };
    BST.prototype.remove = function (data) {
        var removeNode = function (node, data) {
            if (!node) {
                return null;
            }
            if (data === node.data) {
                //node has no children
                if (node.left === null && node.right === null) {
                    return null;
                }
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
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
            else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    };
    BST.prototype.minHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null) {
            return -1;
        }
        ;
        var left = this.minHeight(node.left);
        var right = this.minHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
        ;
    };
    BST.prototype.inOrder = function () {
        if (!this.root) {
            return null;
        }
        else {
            var result_1 = new Array();
            var traverseInOrder_1 = function (node) {
                console.log(node.left, 'left');
                node.left && traverseInOrder_1(node.left);
                console.log('pushing');
                result_1.push(node.data);
                console.log(result_1);
                console.log(node.right, 'right');
                node.right && traverseInOrder_1(node.right);
                console.log('bt');
            };
            console.log('root');
            traverseInOrder_1(this.root);
            return result_1;
        }
    };
    return BST;
}());
var tree = new BST();
tree.add(34);
tree.add(5);
tree.add(2);
tree.add(60);
tree.add(40);
tree.add(70);
tree.add(39);
tree.add(45);
tree.add(69);
tree.add(80);
// console.log(tree)
console.log(tree.minHeight());
// console.log(tree.findMin())
// console.log(tree.findMax())
//tree.remove(310)
//console.log(tree)
//console.log(tree.inOrder())
