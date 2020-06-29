class SorthingAlgorithms {
    //selectionSort
    selectionSort(array: number[] | string[]) {
      let found = false;
      let index = 0
      for(let i = 0; i < array.length; i++) {
        let minimum = array[i]
        for(let k = i + 1; k < array.length; k++) {
          if(minimum > array[k]) {
            minimum = array[k];
            index = k;
            found = true;
          }
        }
        if(found) {
          const temp = array[index];
          array[index] = array[i];
          array[i] = temp;
          found = false;
        }
      }
      return array;
    }
  

  }
  
  let sort = new SorthingAlgorithms();
  console.log(sort.selectionSort(['c', 'b', 'q', 'a']))