/** adjencency matrix implementation 
class GraphBreadthFirstTraversal{

    bfs(graph: number[][], root: number) {
        let queue = [];
        let connections = [];
        let nodeConnections = {};
        for (let i = 0; i < graph.length; i++) {
            nodeConnections[i] = Infinity;
        }
        nodeConnections[root] = 0;
        queue.push(root);
        while (queue.length !== 0 ) {
            let current = queue.shift();
            connections = graph[current];
            let connectedIndex = [];
            let index = connections.indexOf(1);

            while (index !== -1) {
                connectedIndex.push(index);
                index = connections.indexOf(1, index + 1);
            }

            for (let j = 0; j < connectedIndex.length; j++) {
                if (nodeConnections[connectedIndex[j]] === Infinity) {
                    nodeConnections[connectedIndex[j]] = nodeConnections[current] + 1;
                    queue.push(connectedIndex[j]);
                }
            }
        }
        return nodeConnections;
    }
}

let bfsGraph = new GraphBreadthFirstTraversal();

console.log(bfsGraph.bfs(
  [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
  ],4
))
*/

/** Adjacency list graph implementation */
class AjacencyListGraph {
    airports = [];
    routes = [];
    connections = new Map();
    constructor(airports, routes) {
      this.airports = airports;
      this.routes = routes;
      this.airports.forEach(airport => this.addNode(airport));
      this.routes.forEach(route => this.createAdjacencyList(route[0], route[1]))
    }
  
    addNode(airport) {
      this.connections.set(airport, []);
    }
  
    createAdjacencyList(airport, destination) {
      this.connections.get(airport).push(destination);
      this.connections.get(destination).push(airport);
    }
  
  // find a route from starting airport to destination
    breadthFirstSearchMethod(airport, destination) {
      let queue = [];
      queue.push(airport);
      let visited = []
      while (queue.length > 0 ) {
        let current = queue.shift();
        let connections = this.connections.get(current);
        for (const connection of connections) { 
          if(visited.indexOf(connection) === -1) {
            visited.push(connection);
            queue.push(connection)
            console.log(queue)
          }
          if(connection === destination) {
            console.log('found ', destination)
          }
        }
      }
    }
  
    visited = [];
  deepFirstSearch(start, stop) {
    this.visited.push(start);
    const destinations = this.connections.get(start);
    for (const destination of destinations) {
      if(destination === 'BKK') {
        console.log('found it', stop);
        return;
      }
      if(this.visited.indexOf(destination) === -1) {
        console.log(destination)
        this.deepFirstSearch(destination, stop);
      }
    }
  }
  }
  
  const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
  const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
  ]
  
  let graph = new AjacencyListGraph(airports, routes)
  graph.breadthFirstSearchMethod('PHX', 'BKK')
  //console.log(graph.connections)