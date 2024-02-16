
      //1. Write a method that reverts the input array?
      //[1, 2, 3, 4, 5]

      // const ArrReverse = () => {
      //   const arr = [1, 2, 3, 4, 5];
      //   const newArr = arr.reverse();
      //   console.log("originalArr: " + arr);
      //   console.log("revertArr: ", newArr);
      // };
      // ArrReverse();

      const ArrReverse = () => {
        const arr = [1, 2, 3, 4, 5];
        const newArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          newArr.push(arr[i]);
        }
        console.log("originalArr: " + arr);
        console.log("revertArr: ", newArr);
      };
      ArrReverse();
  