let hashFunction = (key: string, max: number): number => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }
  
  class HashTable {
    storageLimit = 10;
    buckets = [];
  
    print() {
      console.log(this.buckets)
    }
  
    add(key, value) {
      let index = hashFunction(key, this.storageLimit);
      if(this.buckets[index] === undefined) {
        this.buckets[index] = [[key, value]];
      }
      else {
        let inserted = false;
        for (let i = 0; i < this.buckets[index].length; i++) {
          if(this.buckets[index][i][0] === key) {
            this.buckets[index][i][1] = value;
            inserted = true;
          }
        }
        if(inserted === false) {
          this.buckets[index].push([key,value]);
        };
      };
    };
  
    remove(key) {
      let index = hashFunction(key, this.storageLimit);
      if(this.buckets[index].length === 1 && this.buckets[index][0][0] === key) {
        delete this.buckets[index];
      }
      else {
        for(let i = 0; i < this.buckets[index].length; i++) {
          if(this.buckets[index][i][0] === key) {
            delete this.buckets[index][i];
          };
        };
      };
    };
  
    lookup(key) {
      let index = hashFunction(key, this.storageLimit);
      if(this.buckets[index] === undefined) {
        return undefined;
      }
      else {
        for(let i = 0; i < this.buckets[index].length; i++) {
          if(this.buckets[index][i][0] === key) {
            return this.buckets[index][i][1];
          };
        };
      };
    };
  }
  
  let hashTable = new HashTable();
  hashTable.add('chika', 37);
  hashTable.add('william', 37);
  hashTable.add('john', 27);
  hashTable.add('Tach', 27);
  hashTable.remove('john')
  hashTable.print()