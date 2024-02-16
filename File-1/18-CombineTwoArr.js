
      // 18.Write a method that combines two arrays into one array [1, 2, 3, 4, 5]
      // [6, 7, 8, 9, 10]
   
      let arr1 = [1, 2, 3, 4, 5];
      let arr2 = [6, 7, 8, 9, 10];
      newArr = [...arr1, ...arr2];
      console.log(newArr);

      arr3 = arr1.concat(arr2);
      console.log(arr3);
   