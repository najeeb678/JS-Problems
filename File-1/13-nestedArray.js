
      // 13.Write a method that makes the nested array into one array? [1, [2, 3,
      // [4, 5, 6]]]
   
      let arr = [1, [2, 3, [4, 5, 6]]];
      let newArr = arr.flat(2);
      
      console.log(newArr);
  