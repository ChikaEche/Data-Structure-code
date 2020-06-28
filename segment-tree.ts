class SegmentTree {
    input: any[];
    arrayLength: number;
    minQueryArray = [];
    maxQueryArray = [];
    maxSegmentTree = [];
    minSegmentTree = [];
    sumSegmentTree = [];
    sumQuerryArray= [];
    constructor(input: any[]) {
        this.input = input;
        this.arrayLength = this.input.length;
        this.multipleOfTwoCheck();
    }

    multipleOfTwoCheck() {
        let check = ((Math.log(this.arrayLength)/Math.log(2)) % 1) === 0;
        if(!check) {
            this.nextMultipleOfTwo();
        }
    }

    nextMultipleOfTwo() {
        ++this.arrayLength;
        this.multipleOfTwoCheck();
    }

    createMaxQuerySegmentTree() {
        let diff = this.arrayLength - this.input.length;
        this.maxQueryArray = [...this.input];
        for(let i = 0; i < diff; i++) {
            this.maxQueryArray.push(Number.MIN_VALUE);
        }
        this.maxSegmentTree.length = (2*this.maxQueryArray.length) -1 ;
        this.maxQuerrySegmentTree(this.maxSegmentTree, this.maxQueryArray, 0, (this.arrayLength - 1), 0);
    }

    createMinQuerySegmentTree() {
        let diff = this.arrayLength - this.input.length;
        this.minQueryArray = [...this.input];
        for(let i = 0; i < diff; i++) {
            this.minQueryArray.push(Number.MAX_VALUE);
        }
        this.minSegmentTree.length = (2*this.arrayLength) -1 ;
        this.minQuerrySegmentTree(this.minSegmentTree, this.minQueryArray, 0, (this.arrayLength - 1), 0);
    }

    createSumQuerrySegmentTree() {
      let diff = this.arrayLength - this.input.length;
        this.sumQuerryArray = [...this.input];
        for(let i = 0; i < diff; i++) {
            this.sumQuerryArray.push(0);
        }
        this.sumSegmentTree.length = (2*this.arrayLength) -1 ;
        this.sumQuerrySegmentTree(this.sumSegmentTree, this.sumQuerryArray, 0, (this.arrayLength - 1), 0);
    }

    sumQuerrySegmentTree(segmentTree, arrayInput, arrayLow, arrayHigh, position) {
        if(arrayLow === arrayHigh) {
            segmentTree[position] = arrayInput[arrayLow];
            return;
        }
        let mid = Math.floor((arrayLow + arrayHigh) / 2);
        this.sumQuerrySegmentTree(segmentTree, arrayInput, arrayLow, mid, (2*position) + 1);
        this.sumQuerrySegmentTree(segmentTree, arrayInput, mid + 1, arrayHigh, (2*position) + 2);
        return segmentTree[position] = (segmentTree[(2*position) + 1] + segmentTree[(2*position) + 2]);
    }

    findSumRange(low, high) {
      let sum = this.sumRange(this.sumSegmentTree, low, high, 0, (this.arrayLength - 1), 0);
      return sum;
    }

    sumRange(segmentTree, querryLow, querryHigh, arrayLow, arrayHigh, position) {
        if(querryLow <= arrayLow && querryHigh >= arrayHigh) {
            return segmentTree[position];
        }
        if(querryLow > arrayHigh || querryHigh < arrayLow) {
            return 0;
        }

        let mid = Math.floor((arrayHigh + arrayLow) / 2);
        return (this.sumRange(segmentTree, querryLow, querryHigh, arrayLow, mid, (2*position) + 1) +
        this.sumRange(segmentTree, querryLow, querryHigh, mid + 1, arrayHigh, (2*position) + 2) );
    }

    maxQuerrySegmentTree(segmentTree, arrayInput, arrayLow, arrayHigh, position) {
        if(arrayLow === arrayHigh) {
            segmentTree[position] = arrayInput[arrayLow];
            return;
        }
        let mid = Math.floor((arrayLow + arrayHigh) / 2);
        this.maxQuerrySegmentTree(segmentTree, arrayInput, arrayLow, mid, (2*position) + 1);
        this.maxQuerrySegmentTree(segmentTree, arrayInput, mid + 1, arrayHigh, (2*position) + 2);
        return segmentTree[position] = Math.max(segmentTree[(2*position) + 1], segmentTree[(2*position) + 2]);
    }

    minQuerrySegmentTree (segmentTree, arrayInput, arrayLow, arrayHigh, position) {
        if(arrayLow === arrayHigh) {
            segmentTree[position] = arrayInput[arrayLow];
            return;
        }
        let mid = Math.floor((arrayLow + arrayHigh) / 2);
        this.minQuerrySegmentTree(segmentTree, arrayInput, arrayLow, mid, (2*position) + 1);
        this.minQuerrySegmentTree(segmentTree, arrayInput, mid + 1, arrayHigh, (2*position) + 2);
        return segmentTree[position] = Math.min(segmentTree[(2*position) + 1], segmentTree[(2*position) + 2]);
    }  

    findRangeMax(low, high) {
        let max = this.maxRange(this.maxSegmentTree, low, high, 0, (this.arrayLength - 1), 0);
        return max;
    }

    findRangeMin(low, high) {
        let min = this.minRange(this.minSegmentTree, low, high, 0, (this.arrayLength - 1), 0);
        return min;
    }

    maxRange(segmentTree, querryLow, querryHigh, arrayLow, arrayHigh, position) {
        if(querryLow <= arrayLow && querryHigh >= arrayHigh) {
            return segmentTree[position];
        }
        if(querryLow > arrayHigh || querryHigh < arrayLow) {
            return Number.MIN_VALUE;
        }

        let mid = Math.floor((arrayHigh + arrayLow) / 2);
        return Math.max(this.maxRange(segmentTree, querryLow, querryHigh, arrayLow, mid, (2*position) + 1),
        this.maxRange(segmentTree, querryLow, querryHigh, mid + 1, arrayHigh, (2*position) + 2) );
    }

    minRange(segmentTree, querryLow, querryHigh, arrayLow, arrayHigh, position) {
        if(querryLow <= arrayLow && querryHigh >= arrayHigh) {
            return segmentTree[position];
        }
        if(querryLow > arrayHigh || querryHigh < arrayLow) {
            return Number.MAX_VALUE;
        }

        let mid = Math.floor((arrayHigh + arrayLow) / 2);
        return Math.min( this.minRange(segmentTree, querryLow, querryHigh, arrayLow, mid, (2*position) + 1),
        this.minRange(segmentTree, querryLow, querryHigh, mid + 1, arrayHigh, (2*position) + 2) );
    }
}

let segmentTree = new SegmentTree([-1,2,4,0,9])
segmentTree.createMaxQuerySegmentTree()
segmentTree.createMinQuerySegmentTree()
segmentTree.createSumQuerrySegmentTree();
console.log(segmentTree.findSumRange(3,5))
//console.log(segmentTree.findRangeMin(1,3))
//console.log(segmentTree.findRangeMax(0,5))
//console.log(segmentTree)