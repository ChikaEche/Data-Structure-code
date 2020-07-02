
class PriorityQueue {
  nodeChoice = [];

  enqueue(toNode, distance, fromNode, visited) {
    if(visited.indexOf(toNode) === -1) {
      this.nodeChoice.push({toNode, fromNode, distance});
      this.sort()
    }
  }
  
  dequeue() {
    return this.nodeChoice.shift();
  }
  
  sort() {
    this.nodeChoice.sort((a,b) => a.distance - b.distance);
  }
}

class PrimsAlgorithm{ 
  visited = [];
  queue = new PriorityQueue();

  minimumSpanningTree(array, startingPoint) {
    let count =0 
    let spanningTree = [];
    let arrayLength = Object.keys(array).length
    this.visited.push(startingPoint);
    let currentNode = startingPoint;
    while(this.visited.length !== arrayLength) {
      for(let neighbour in array[currentNode]) {
        this.queue.enqueue(neighbour, array[currentNode][neighbour], currentNode, this.visited);
      }
      let next = this.queue.dequeue();
      if(this.visited.indexOf(next.toNode) === -1) {
        spanningTree.push(next);
        currentNode = next.toNode;
        this.visited.push(currentNode)
      }

    }
    console.log(spanningTree)
  }
}
let spanningTree = new PrimsAlgorithm();
let graph = {
  'A': {
    'B': 1,
    'C': 7
  },
  'B': {
    'A': 1,
    'C': 5,
    'D': 3,
    'E': 4
  },
  'C': {
    'A': 7,
    'D': 6,
    'B': 5
  },
  'D': {
    'B': 3,
    'E': 2,
    'C': 1,
    'H': 9,
    'J': 3
  },
  'E': {
    'B': 4,
    'D': 2,
    'F': 1,
    'H': 4
  },
  'F': {
    'E': 1,
    'G': 2
  },
  'G': {
    'F': 2,
    'H': 8
  },
  'H': {
    'E': 4,
    'D': 9,
    'K': 7,
    'G': 8
  },
  'J': {
    'D': 3,
    'K': 4,
  },
  'K': {
    'H': 7,
    'J': 4
  }
}

spanningTree.minimumSpanningTree(graph, 'A')