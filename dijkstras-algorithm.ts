class PriorityQueue {
    values = [];
    enqueue(neighbour, distance, visited) {
      if(visited.indexOf(neighbour) === -1) {
        this.values.push({neighbour, distance});
      }
      this.sort();
    }
  
    dequeue() {
      return this.values.shift();
    }
  
    sort() {
      this.values.sort((a,b) => a.distance - b.distance);
    }
  }
  
  class DijkstraAlgorithm {
    constructor() {}
    shortestPath = {};
    queue = new PriorityQueue();
    findShortestPath(graph, startNode, endNode) {
      this.shortestPath[endNode] = endNode
      let distances = {};
      let visited = [];
      for(let node in graph) {
        distances[node] = {
          previousNode : null,
          distance: Infinity,
        };
      }
      distances[startNode] = {
        distance:0,
        previousNode: null
      }
      this.queue.enqueue(startNode, distances[startNode].distance, visited)
      visited = [startNode];
      while(this.queue.values.length) {
        let current = this.queue.dequeue();
        current = current.neighbour;
        
        for(let neighbour in graph[current]){
          let interNodeDistance = distances[current].distance + graph[current][neighbour];
          if(interNodeDistance < distances[neighbour].distance) {
            distances[neighbour].distance = interNodeDistance;
            distances[neighbour].previousNode = current;
            this.queue.enqueue(neighbour,interNodeDistance, visited);
            if(visited.indexOf(neighbour) === -1) {
              visited.push(neighbour);
            }
          }
        }
      }
  
      while(true) {
        let currentNode = endNode
        if(currentNode === startNode) {
          return;
        }
        this.shortestPath[currentNode] = distances[currentNode].previousNode;
        this.shortestPath[currentNode].distance = distances[currentNode].distance;
        currentNode = distances[currentNode].previousNode
      }
     
    }
  }
  
  let d_graph = {
    'A': {
      'B':2,
      'D':5,
      'E':7
    },
    'B': {
      'A':2,
      'C':1,
    },
    'C':{
      'B':1,
      'F':5,
      'E':3
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
  
  let path = new DijkstraAlgorithm();
  path.findShortestPath(d_graph,'A','C')
  