// 7. Write a simple JavaScript program to join all elements of the following array into a
// string.
// Expected Output : "Red,Green,White,Black" "Red,Green,White,Black"
// "Red+Green+White+Black"

let arr = ["Red", "Green", "White", "Black"];
// function arrToString(arr) {
//   return arr.join("+");
// }

function arrToString(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i != arr.length - 1) {
      result += "+";
    }
  }
  return result;
}

console.log(arrToString(arr));
