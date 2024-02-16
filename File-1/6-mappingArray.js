{
  /* 6. Write a method that prints all values of an array with all properties
      used for mapping an array? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.map(myfun);
function myfun(val, index, arr) {
  console.log("Current Index ", index, "Current Value", val, "array :", arr);
}
