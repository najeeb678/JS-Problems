// 3. Write a JavaScript function that accepts a string as a parameter and converts the first
// letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

let string = "the quick brown fox";
function upperCase(str) {
  let stringModified = "";
  let wordList = str.split(" ");
  for (let i = 0; i < wordList.length; i++) {
    stringModified +=
      wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1).join(" ");
  }
  //   for (let i = 0; i < wordList.length; i++) {
  //     stringModified +=
  //       `${wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1)} `;
  //   }

  return stringModified;
}
console.log(upperCase(string));
