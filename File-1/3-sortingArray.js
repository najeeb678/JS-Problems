// 3. Write a JavaScript program to sort the items of an array?
//    [ 3, 8, 7, 6, 5, -4, 3, 2, 1];

//   let array = [3, 8, 7, 6, 5, -4, 3, 2, 1];

//   array.sort(function (a, b) {
//     return a - b;
//   });

//   console.log("Sorted array in ascending order:", array);

let arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("Original array:", arr);
console.log("Sorted array:", sortArray(arr));
