
      // 14.Write a squareList function using any combination of map(), filter(),
      // and reduce(). The function should return a new array containing the
      // squares of only the positive integers (decimal numbers are not integers)
      // when an array of real numbers is passed to it. An example of an array of
      // real numbers is [-3, 4.8, 5, 3, -3.2].
  
      function squareListOfNumbers(num) {
        if (num > 0 && Number.isInteger(num)) {
          return num * num;
        } else {
          return undefined;
        }
      }

      let arr = [-3, 4.8, 5, 3, -3.2];

      let newArr = arr
        .map(squareListOfNumbers)
        .filter((val) => val != undefined);
      console.log(newArr);
   