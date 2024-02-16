// 16.Write a method that removes number 2 from an array? [1, 2, 3, 4, 5, 6,
// 7, 8, 9, 10]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   function removeNumber(arr, num) {
//     return arr.filter((item) => item !== num);
//   }

function removeNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
console.log(removeNumber(arr, 2));
