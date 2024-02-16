
      {/* 7. Write a method that finds the values greater than 5 in an array and
      returns a new array? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */}

      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //   let newArray = array.filter((val) => val > 5);
      //   console.log(newArray);
      function filter(array) {
        let val = 5;
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
          if (array[i] > val) {
            newArray.push(array[i]);
          }
        }
        return newArray;
      }
      console.log(filter(array));
    