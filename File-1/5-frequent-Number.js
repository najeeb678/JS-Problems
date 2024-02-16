
  //  5. Write a JavaScript program to find the most frequent item of an array? 
  //      [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] 
  
      let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
      let maxCount = 0;
      let mostFrequentItem = "";

      for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            count++;
          }
        }
        if (count > maxCount) {
          maxCount = count;
          mostFrequentItem = arr[i];
        }
      }

      console.log("Count:", maxCount);
      console.log("Most frequent item:", mostFrequentItem);
 