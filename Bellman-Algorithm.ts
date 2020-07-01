class BellmanFordAlgorithm {

    shortestPath(array, source) {
      let arrayLength = Object.keys(array).length
      let parents = {};
      let visited = [];
      let queue = [];
      let distances = {};
      for(let node in array) {
        distances[node] = Infinity;
        parents[node] = ''
      }
      distances[source] = 0;
      for(let i = 0; i < arrayLength - 1; i++) {
        visited = [];
        queue.push(source);
        visited.push(source);
        while(queue.length) {
          let current = queue.shift();
          console.log(current)
          for(let neighbours in array[current]) {
            let interNodeDistance = array[current][neighbours] + distances[current];
            if(interNodeDistance < distances[neighbours]) {
              distances[neighbours] = interNodeDistance;
              parents[neighbours] = current
            }
            if(visited.indexOf(neighbours) === -1) {
              visited.push(neighbours)
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
  