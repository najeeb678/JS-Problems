
      {/* 17.Write a method that return a new array from [1, 2, 3, 4, 5, 6, 7, 8, 9,
      10] to [4, 5, 6, 7] */}

      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //   let newArr = arr.slice(3, 7);
      //   console.log(newArr);
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3 && arr[i] < 8) {
          newArr.push(arr[i]);
        }
      }
      console.log(newArr);
   