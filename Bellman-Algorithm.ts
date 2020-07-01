class BellmanFordAlgorithm {

    shortestPath(array, source) {
      let arrayKeys = Object.keys(array);
      let parents = {};
      let visited = [];
      let queue = [];
      let distances = {};
      for(let node in array) {
        distances[node] = Infinity;
        parents[node] = ''
      }
      distances[source] = 0;
      for(let i = 0; i < arrayKeys.length - 1; i++) {
        for(let neighbours in array[arrayKeys[i]]) {
          let interNodeDistance = array[arrayKeys[i]][neighbours] + distances[arrayKeys[i]];
          if(interNodeDistance < distances[neighbours]) {
            parents[neighbours] = arrayKeys[i];
            distances[neighbours] = interNodeDistance;
            if(visited.indexOf(neighbours) === -1) {
              queue.push(neighbours)
            }
          }
        }
      }
      console.log(distances,parents)
    }
  }
  let bellman = new BellmanFordAlgorithm();
  let array = {
    '0': {
      '1': 5,
      '2': 2,
    },
    '1': {
      '0': 3,
      '3': 4
    },
    '2': {
      '3': 6
    },
    '3': {
      '0': -1
    }
  }
  bellman.shortestPath(array, '0')
  