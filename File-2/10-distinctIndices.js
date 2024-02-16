// 10. Given an integer x and a sorted array a of N distinct integers, design a linear-time
// algorithm to determine if there exists two distinct indices i and j such that a[i] + a[j] == x.
// For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should
// return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7

//code-A
let arr = [3, 5, 2, -4, 8, 11];
function checkIndices(arr, x) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        result.push([arr[i], arr[j]]);
      }
    }
    }
    return result;
}

console.log(checkIndices(arr, 7));



