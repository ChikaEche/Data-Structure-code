class FloydWarshallAlgorithm {
    previousMatrix = [];
    currentMatrix = [];
  
    shortestPath(array) {
      this.previousMatrix = [...array];
      this.currentMatrix = [...array]
      for(let nodes = 0; nodes < array.length; nodes++) {
        for(let i = 0; i < array.length; i++) {
          for(let j = 0; j< array.length; j++) {
            if(i !== nodes && j !== nodes) {
              this.currentMatrix[i][j] = Math.min(this.previousMatrix[i][j], (this.previousMatrix[i][nodes]
              + this.previousMatrix[nodes][j])
              )
            }
          }
        }
        
        this.previousMatrix = [];
        this.previousMatrix = [...this.currentMatrix];
      }
      console.log(this.previousMatrix, this.currentMatrix)
    } 
  }
  let floyd = new FloydWarshallAlgorithm();
  let matrix = [
    [0,9,-4,Infinity],
    [6,0,Infinity,2],
    [Infinity,5,0,Infinity],
    [Infinity,Infinity,1,0]
  ];
  floyd.shortestPath(matrix)
  