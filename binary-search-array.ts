// asumming a sorted array
class BinarySearch {
    search(array: number[], element) {
      let lowerBound = 0;
      let higherBound = array.length - 1;
      let half = 0
      while((higherBound - lowerBound) >= 1) {
        half = Math.floor((higherBound + lowerBound) / 2)
        if(array[half] === element) {
          return half;
        }
        if(element < array[half]) {
          higherBound = half;
        }
        else {
          lowerBound = half;
        }
      }
      return -1;
    }
  }
  
  let search = new BinarySearch();
  //console.log(search.search([1,2,3,7,9,10,33,40], 40))