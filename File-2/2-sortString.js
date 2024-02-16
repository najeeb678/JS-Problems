// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

let string = "webmaster";
const alphabeticalOrder = (string) => {
  let str = string.split("");
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] > str[j + 1]) {
        // Swap
        var temp = str[j];
        str[j] = str[j + 1];
        str[j + 1] = temp;
      }
    }
  }
  return str.join("");
};

console.log("Sorted string:", alphabeticalOrder(string));

//with built in methods
// let string = "webmaster";
// const alphabeticalOrder = (str) => {
//   return str.split("").sort().join("");
// };
// console.log("Sorted string:", alphabeticalOrder(string));
