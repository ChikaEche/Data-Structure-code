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
  
    bubbleSort(array: number[] | string[]) {
        let arrayLength = array.length;
        for(let i = 0; i < array.length; i++) {
          for(let k = 1; k < arrayLength; k++) {
            if(array[k] < array[k - 1]) {
              const temp = array[k];
              array[k] = array[k-1];
              array[k-1] = temp;
            }
          }
          --arrayLength;
        }
        return array
      }

      insertionSort(array: number[] | string[]) {
        for(let i = 0; i < array.length; i++) {
          if(array[i] > array[i+1]) {
            const temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            for(let k = i; k > 0; k--) {
              if(array[k] < array[k-1]) {
                const temp = array[k];
                array[k] = array[k-1];
                array[k-1] = temp;
              }
            }
          }
        }
        return array
      }
  }
  
  let sort = new SorthingAlgorithms();
  console.log(sort.selectionSort(['c', 'b', 'q', 'a']))