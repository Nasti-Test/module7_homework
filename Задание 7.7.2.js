function calculate(a,b, operator) {
    switch(operator) {
        case'+':
          return a + b;
        case'-':
          return a - b;
        case'*':
          return a * b;
        case'/':
          if(b === 0) throw new Error("Division by zero is not allowed");
          return a / b;
        default:
          throw new Error("Invalid operator. Use '+', '-', '*', or '/'");
    }
}

const params = [2, 3, "+"];
const result = calculate.apply(null, params);

console.log(`Результат: ${result}`); 