// 6. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data : document.write(is_array('w3resource'));
// document.write(is_array([1, 2, 4, 0]));
// false true

// if (Array.isArray(input)) {
//     return true;
// }
// else {
//     return false;
// }
function isArray(input) {
  if (typeof input === "object") {
    return true;
  } else {
    return false;
  }
}

console.log(isArray("w3resource"));

console.log(isArray([1, 2, 4, 0]));
