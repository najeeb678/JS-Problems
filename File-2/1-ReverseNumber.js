// 1. Write a JavaScript function that reverse a number.
// Sample Data and output: Example x = 32243;
// Expected Output : 34223

// let number = 32243;

function reverse(number) {
  let reverseNumber = 0;
  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverseNumber;
}
console.log(reverse(12345));

//built in methods
// let number = 12345;
// const x = number.toString();
// const reverseNumber = x.split("").reverse().join("");

// console.log(reverseNumber);
