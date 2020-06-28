class maxHeap {
  heap = [null];
  insert = (number) => {
      this.heap.push(number);
      if(this.heap.length > 2) {
          let index = this.heap.length - 1;
          while(this.heap[index] > this.heap[Math.floor(index/2)]) {
              if(index >= 1) {
                  [this.heap[Math.floor(index/2)], this.heap[index]] = 
                  [this.heap[index], this.heap[Math.floor(index/2)]];
                  if(Math.floor(index/2) > 1) {
                      index = Math.floor(index/2);
                  }
                  else {
                      break;
                  };
              };
          };
      };
  };

  remove = () => {
      let largest = this.heap[1];
      if(this.heap.length > 2) {
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();
        if(this.heap.length === 3) {
          if(this.heap[1] > this.heap[2]) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
          }
          else {
            return largest;
          }
        }
        let i = 1;
        let left = i * 2;
        let right = (i * 2) + 1;
        while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
          if(this.heap[left] > this.heap[right]) {
            [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
            i = left;
          }
          else {
            [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
            i = right;
          }
          left = i * 2;
          right = (i * 2) + 1
          if(this.heap[left] === undefined || this.heap[right] === undefined) {
            break;
          }
        };
      }
      else if (this.heap.length === 2) {
        this.heap.splice(1,1);
      } else {
        return null;
      };
      return largest;
  };

  heapSort = () => {
  let sorted = [];
  while(this.heap.length > 1) {
    sorted.push(this.remove());
  };
  return sorted;
}
};

class minHeap {
  heap = [null];
  insert = (number) => {
      this.heap.push(number);
      if(this.heap.length > 2) {
          let index = this.heap.length - 1;
          while(this.heap[index] < this.heap[Math.floor(index/2)]) {
              if(index >= 1) {
                  [this.heap[Math.floor(index/2)], this.heap[index]] = 
                  [this.heap[index], this.heap[Math.floor(index/2)]];
                  if(Math.floor(index/2) > 1) {
                      index = Math.floor(index/2);
                  }
                  else {
                      break;
                  };
              };
          };
      };
  };

  remove = () => {
      let smallest = this.heap[1];
      if(this.heap.length > 2) {
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();
        if(this.heap.length === 3) {
          if(this.heap[1] > this.heap[2]) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
          }
          else {
            return smallest;
          }
        }
        let i = 1;
        let left = i * 2;
        let right = (i * 2) + 1;
        while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
          if(this.heap[left] < this.heap[right]) {
            [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
            i = left;
          }
          else {
            [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
            i = right;
          }
          left = i * 2;
          right = (i * 2) + 1
          if(this.heap[left] === undefined || this.heap[right] === undefined) {
            break;
          }
        };
      }
      else if (this.heap.length === 2) {
        this.heap.splice(1,1);
      } else {
        return null;
      };
      return smallest;
  };

heapSort = () => {
  let sorted = [];
  while(this.heap.length > 1) {
    sorted.push(this.remove());
  };
  return sorted;
}
}

let heap = new maxHeap();
heap.insert(3)
heap.insert(10)
heap.insert(15)
heap.insert(1)
heap.insert(0)
heap.insert(100)
heap.insert(5)
heap.insert(25)
heap.insert(7)
heap.insert(10)
heap.insert(11)
heap.remove()
console.log(heap.heapSort())
console.log(heap.heap)