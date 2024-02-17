// function sum(firstValue: number, secondValue: number) {
//   // => Parameters / Arguments.
//   console.log(`Sum is ${firstValue + secondValue}`);
// }

// sum(20, 50); //Function Call => Use function by name
// sum(1000, 2500);
// sum(35, 45);
// sum(50, 60);

// function multiply(a: number, b: number, c: number, d: number) {
//   console.log(`Multiply is ${a * b * c * d}`);
// }

// multiply(2, 3, 2, 1);

// Return A Value

// function sum(x: number, y: number): number {
//   return x + y;
// }

// let result: number = 2 * sum(10, 20);
// console.log(`Result is ${result}`);
// console.log(`Another Result is ${sum(8, 9)}`);
// console.log(`Another Result is ${sum(15, 16)}`);
// console.log(`Another Result is ${sum(20, 30)}`);

// Arrow Function / Anonymous Function

// let sum = (x: number, y: number): number => {
//   return x + y;
// };

// console.log(`Sum is ${sum(20, 30)}`);
// console.log(`Sum is ${sum(50, 60)}`);

let max = (x: number, y: number): number => {
  return x > y ? x : y;
};

console.log(`Maximum Number is ${max(50, 60)}`);

let min = (x: number, y: number): number => {
  return x < y ? x : y;
};

console.log("Minimum Number is " + min(50, 60));
