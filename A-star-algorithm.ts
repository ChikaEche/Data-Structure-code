class PriorityQueue {
    values = [];
    enqueue(neighbour, priority, visited) {
      if(visited.indexOf(neighbour) === -1) {
        this.values.push({neighbour, priority});
      }
      this.sort();
    }
  
    dequeue() {
      return this.values.shift();
    }
  
    sort() {
      this.values.sort((a,b) => a.priority - b.priority);
      this.values = [this.values.shift()];
    }
  }
  
  class AStarAlgorithm {
    constructor() {}
    queue = new PriorityQueue();
    findShortestPath(graph, startNode, endNode, huestic) {
      let distances = {};
      let visited = [];
      for(let node in graph) {
        distances[node] = {
          previousNode : null,
          distance: Infinity,
          priority: Infinity,
        };
      }
      distances[startNode] = {
        distance:0,
        previousNode: null,
        priority: 0
      }
      this.queue.enqueue(startNode, distances[startNode].priority, visited)
      visited = [startNode];
      while(this.queue.values.length) {
        let current = this.queue.dequeue();
        current = current.neighbour;
        console.log(current)
        if(current === endNode) {
          break;
        }
        for(let neighbour in graph[current]){
          let interNodeDistance = distances[current].distance + graph[current][neighbour];
          //console.log(interNodeDistance, neighbour)
          let priority = interNodeDistance + huestic[neighbour];
          //console.log(priority)
          if(priority < distances[neighbour].priority) {
            distances[neighbour].priority = priority;
            distances[neighbour].distance = interNodeDistance;
            distances[neighbour].previousNode = current;
            this.queue.enqueue(neighbour, priority, visited);
            if(visited.indexOf(neighbour) === -1) {
              visited.push(neighbour);
            }
          }
        }
      }
      let currentNode = endNode
      while(true) {
        if(currentNode === startNode) {
          break;
        }
        let previous = currentNode;
        let distance = distances[currentNode].distance
        currentNode = distances[currentNode].previousNode
        console.log(`From ${previous} with a total travelled distance of ${distance} to ${currentNode}`)
      }
      console.log(distances)
    }
  }
  let graph = {
    'A': {
      'B':2,
      'D':5,
      'E':7
    },
    'B': {
      'A':2,
      'C':3,
    },
    'C':{
      'B':1,
      'F':5,
      'E':3,
      
    },
    'D': {
      'F':3,
      'A':5
    },
    'E': {
      'A':7,
      'C':3,
      'F':6
    },
    'F':{
      'C':5,
      'D':3,
      'E':6
    }
  }
  
  let huestic = {
    'A' : 1.5,
    'B': 4,
    'C': 2,
    'D': 0.5,
    'E': 1.2,
    'F': 0,
    'G': 4.5
  }
  
  let path = new AStarAlgorithm();
  path.findShortestPath(graph,'B','C', huestic)
  