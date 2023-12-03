class Numbers {
    constructor(start, end) {
      this.start = start;
      this.end = end;
      this.poweredNumbers = []; 
    }
  
    power(exponent) {
      for (let base = this.start; base <= this.end; base++) {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
          result *= base;
        }
        this.poweredNumbers.push(result);
      }
      document.write(this.poweredNumbers);
    }
  
    get(int) {
      return this.poweredNumbers[int];
    }
}
  
let n = new Numbers(1, 5);