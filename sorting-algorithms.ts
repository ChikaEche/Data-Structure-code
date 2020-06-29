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

      shellSort(array: number[] | string[]) {
        let found = false;
        let index = 0
        for (let interval = Math.floor(array.length/2); interval > 0; interval = Math.floor(interval/2)) {
            for(let i = 0; i < (array.length - interval); i++) {
              let smallest = array[i];
              let step = interval
              while((step+i) < (array.length)) {
                if(smallest > array[step+i]) {
                  smallest = array[step+i]
                  index = step+i;
                  found = true;
                }
                step = step + interval
              }
              if(found) {
                const hold = array[i];
                array[i] = array[index]
                array[index] = hold
                found = false
              }
            }
          }
      }

      mergeSort(array) {
        if(array.length < 2) {
          return array;
        }
    
        let middle = Math.floor(array.length / 2);
        let left = array.slice(0,middle);
        let right = array.slice(middle,array.length);
        let y = this.merge(this.mergeSort(left), this.mergeSort(right))
        return y;
      }
    
      merge(left,right) { 
        let result = [];
        while(left.length && right.length) {
          if(left[0] <= right[0]) {
            result.push(left.shift());
          }
          else {
            result.push(right.shift());
          }
        }
        while(left.length) {
          result.push(left.shift());
        }
        while(right.length) {
          result.push(right.shift());
        }
        return result
      }

      quickSort(array) {
        if(array.length <= 1) {
          return array;
        }
        let pivot = array[array.length - 1];
        let left = [];
        let right = [];
        for(let i = 0; i < array.length - 1; i++) {
          if(array[i] < pivot) {
            left.push(array[i])
          }
          else {
            right.push(array[i])
          }
        }
        let arr = [...this.quickSort(left), pivot, ...this.quickSort(right)];
        return arr;
      }
  }
  
  let sort = new SorthingAlgorithms();
  console.log(sort.selectionSort(['c', 'b', 'q', 'a']))