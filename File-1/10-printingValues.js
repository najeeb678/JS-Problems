
      // Write a method that prints all the indexes of an array? [11, 12, 13, 14,
      // 15]
   
      let array = [11, 12, 13, 14, 15];
      //for in used for indexes
      //   for(i in array){
      //     console.log(i);
      //   }
      //   //for of used for values
      //   for(i of array){
      //     console.log(i);
      //   }
      //using forEach
      array.forEach((val, index) => {
        console.log(index, val);
      });
   