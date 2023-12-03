class Chapter3 {
    power(number, exponent) {
      let result = 1;
      for (let counter = 0; counter < exponent; counter++) {
        result = result * number;
      }
      alert(`${number}^${exponent} = ${result}`);
    }
  
    findCalculation(targetN) {
      function calculation(standard, operation) {
        if (standard == targetN) {
          return operation;
        } else if (standard > targetN) {
          return null;
        } else {
          return calculation(standard + 5, `(${operation} + 5)`) || 
          calculation(standard * 3, `(${operation} * 3)`);
        }
      }
      alert(targetN + " = " + calculation(1, "1"));
    }
  
    determineN(n) {
        if (n % 2 == 0) alert(`${n} is even`);
        else alert(`${n} is odd`);
    }
  
    countChar(arg, char) {
      let string = String(arg, char), str = "", x;
      for(let count = 0; count < string.length; count++) {
        x = string[count];
        if (x == char) {
          str += char;
        }
      }
      alert(`Total "${char}" in "${arg}" = ${str.length}`);
    }
}
  
let ch3 = new Chapter3();