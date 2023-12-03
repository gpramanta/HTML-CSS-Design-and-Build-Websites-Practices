class Chapter2 {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    triangle(char) {
      let str = char, arr = [];
      while (str.length <= this.end) {
        arr.push(str);
        str += char;
      }
  
      let result = "";
      for (let char of arr) {
        result += char;
        result += "\n";
      }
      alert(result);
    }
  
    fizzBuzz(str1, str2, str3) {
      let current;
      for (let i = this.start; i <= this.end; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) current = str3;
        else if (i % 3 == 0) current = str1;
        else if (i % 5 == 0) current = str2; 
        else current = i; alert(current);
      }
    }

    chessBoard(char1, char2) {
        let pattern = "";
        for (let y = 0; y < this.end; y++) {
          for (let x = 0; x < this.end; x++) {
            if ((x + y) % 2 == 0) {
              pattern += char1;
            } else {pattern += char2;}
          }
          pattern += "\n";
        }
        alert(pattern); 
    }
}
  
let ch1 = new Chapter2(1, 10);