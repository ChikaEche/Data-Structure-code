//linked list
function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element) {
      this.element = element;
      this.next = null;
    };
  
    this.size = function() {
      return length
    };
  
    this.head = function() {
      return head;
    };
  
    this.add = function(element) {
      var node = new Node(element);
      if(!head) {
        head = node;
      }
      else {
        var currentNode = head;
        while(currentNode.next) {
          currentNode = currentNode.next
        }
        currentNode.next = node;
      }
      ++length;
    };
  
    this.remove = function(element) {
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element) {
        head = currentNode.next;
      }
      else {
          let count = 0
        while(currentNode.element !== element) {
          ++count;
          previousNode = currentNode;
          currentNode = currentNode.next;
          if (count > length) {
            return null;
          }
        }
        previousNode.next = currentNode.next
      }
      --length;
    }
  
    this.isEmpty = function() {
      return length === 0;
    }
  
    this.indexOf = function(element) {
      var currentNode = head;
      var index = -1;
      while(currentNode) {
        ++index;
        if(currentNode.element === element) {
          return index;
        }
        currentNode = currentNode.next
      }
      return -1;
    };
  
    this.elementAt = function(index) {
      var currentNode = head;
      var count = 0;
      while(count < index) {
        ++count;
        currentNode = currentNode.next;
      }
      return currentNode.element;
    };
  
    this.addAt = function(index, element) {
      var node = new Node(element);
      var currentNode = head;
      var previuosNode;
      var currentIndex = 0;
      if(index > length) {
        return false;
      }
  
      if(index === 0) {
        node.next = currentNode;
        head = node;
      }
      else {
        while(currentIndex < index) {
          ++currentIndex;
          previuosNode = currentNode;
          currentNode = currentNode.next;
        }
        node.next = currentNode;
        previuosNode.next = node;
      }
      ++length
    }
  
    this.removeAt = (index, element) => {
      var currentNode = head;
      var previuosNode;
      var currentIndex = 0;
      if(index === 0) {
        head = currentNode.next;
      }
      else {
        while(currentIndex < index) {
          ++currentIndex;
          previuosNode = currentNode;
          currentNode = currentNode.next;
        }
  
        previuosNode.next = currentNode.next;
      }
      --length;
      return currentNode.element;
    }
  
  }
  
  var list = new LinkedList();
  list.add(6);
  list.add(26);
  list.add(126);
  console.log(list.head())
  console.log(list.size())
  console.log(list.remove(26))
  console.log(list.head())
  

  class node {
    value;
    previous;
    next;
    constructor(value) {
      this.value = value;
      this.previous = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    head: node;
    tail: node;
    length: number;
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    add(element) {
      let newNode = new node(element);
      if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
      }
      else {
        let temp = this.tail;
        this.tail = newNode;
        newNode.previous = temp;
        temp.next = newNode;
        ++this.length;
      }
      return this;
    }

    pop() {
        if(!this.head) return undefined;
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        else {
          let temp = this.tail;
          this.tail = temp.previous;
          this.tail.next = null;
          temp.previous = null;
          --this.length;
        }
        return this;
    }

    unshift(value) {
        let newNode = new node(value);
        if(!this.head) {
          this.head = newNode;
          this.tail = newNode;
        }
        else {
          let temp = this.head;
          this.head = newNode;
          newNode.next = temp;
          temp.previous = newNode;
        }
        ++this.length;
        return this;
    }

    shift() {
        if(!this.head) return undefined;
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
        }
        else {
          let temp = this.head;
          this.head = temp.next;
          this.head.previous = null;
          temp.next = null;
        }
        --this.length;
        return this;
      }

  }
  
  let doublyList = new DoublyLinkedList();
  doublyList.add(6)
  doublyList.add(7)
  doublyList.add(12)
  doublyList.add(132)
  console.log(doublyList)
  
  
class CircularNode {
    value;
    next;
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    head;
    length;
    constructor() {
      this.head = null;
      this.length = null;
    }
  
    push(value) {
      let newNode = new CircularNode(value);
      if(!this.head) {
        this.head = newNode;
      }
      else if(this.length === 1) {
        let node = newNode;
        this.head.next = node;
        node.next = this.head;
      }
      else {
        let node = this.head;
        while(node.next != this.head) {
          node = node.next
        }
        node.next = newNode;
        newNode.next = this.head;
      }
      ++this.length;
      return this;
    }
  
    pop() {
      if(!this.head) return undefined;
      if(this.length === 1) {
        this.head = null;
      }
      else {
        let node = this.head;
        let temp = node;
        while(node.next != this.head) {
          temp = node;
          node = node.next;
        }
        temp.next = this.head;
        node = null;
      }
      --this.length;
      return this;
    }
  }
  
  
  