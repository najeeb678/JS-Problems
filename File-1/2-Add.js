
      {/* Write a “Sum” method which will work properly when invoked using either
      syntax below. */}
   
      //const sum = (a, b) => {return (a + b)};
      //console.log(sum(2,3));
      function add(a, b) {
        if (arguments.length === 2) {
          return a + b;
        } else if (arguments.length === 1) {
          return function (b) {
            return a + b;
          };
        }
      }
      console.log(add(2)(3));
      console.log(add(2, 3));
   