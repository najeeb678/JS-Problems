
      // 15.Write a method that checks number 5 exist in array or not? The answer
      // must be true or false. [1, 2, 3,4 ,5 ,6, 7, 8, 9,10]
 
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const checkNumber = (arr, number) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == number) {
            return true;
          }
        }
        return false;
      };
      console.log(checkNumber(arr, 5));
   