//  19.Write a function that reverses a number 12345
function reverse() {
  let number = 12345;
    let reverseNumber = "";
    let numberAsString = number.toString();
  for (let i = numberAsString.length - 1; i >= 0; i--) {
    reverseNumber += numberAsString[i];
  }
  console.log(reverseNumber) ;
}
reverse();
