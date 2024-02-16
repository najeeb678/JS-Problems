// 5. Write a JavaScript conditional statement to find the sign of product of three numbers.
// Sample numbers : 3, -7, 2
// Output : The sign is -

let num1 = 3;
let num2 = -7;
let num3 = 2;
function test(num1, num2, num3) {
  let product = num1 * num2 * num3;
  if (product > 0) {
    console.log("Sign is : +");
  } else if (product < 0) {
    console.log("Sign is : -");
  } else {
    console.log("0");
  }
}
test(num1, num2, num3);
