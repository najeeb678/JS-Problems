
      // Write a method that finds the index of a value 5 in an array? [1, 2, 3, 4,
      // 5, 6, 7, 8, 9, 10]
   
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      function findIndex(array, value) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === value) {
            return i;
          
          }
        }
        return -1;
      }
      console.log("index of 5:",findIndex(array, 5));
   