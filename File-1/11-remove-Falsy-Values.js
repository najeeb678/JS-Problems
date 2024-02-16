
      // 11.Remove all falsy values from an array. The falsy values in JavaScript
      // are false, null, 0, "", undefined, and NaN.
   

   
      let array = [false, null, 0, "", undefined, NaN, "hello", 42];
      let newArray = array.filter(Boolean);
      console.log(newArray);
  