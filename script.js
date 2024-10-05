let numbers = [1, 2, 3, 4, 5];

let firstNumber = numbers[0];
let lastNumber = numbers[numbers.length - 1];
let middleNumber = numbers[2];

console.log(firstNumber);
console.log(lastNumber);
console.log(middleNumber);

console.log("Array Length:", numbers.length);

numbers.push(6);
console.log("After .push():", numbers);
numbers.pop();
console.log("After .pop():", numbers);
numbers.shift();
console.log("After .shift():", numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log("For loop element:", numbers[i]);
  }

const [first, second, ...rest] = numbers;

console.log("First Element:", first);
console.log("Second Element:", second);
console.log("Rest of the Array:", rest);