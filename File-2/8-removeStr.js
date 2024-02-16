// 8. Write a JavaScript function to remove specified number of characters from a string.
// Test Data : document.write(truncate_string("Robin Singh",4));
// "Robi"

let givenString = "Robin Singh";
let number = 2;

function truncate_string(str, num) {
  let finalStr = " ";
  for (let i = 0; i < str.length - num; i++) {
    //run the loop till we wanted it to print
    finalStr += str[i];
  }
  return finalStr;
}

console.log(truncate_string(givenString, number));
console.log(truncate_string("Najibullah", 5));
