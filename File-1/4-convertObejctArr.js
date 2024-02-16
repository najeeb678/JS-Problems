
      {/* 4.How to convert an Object {} into an Array [] and Array [] to Object {}
      in JavaScript? */}

      let person = {
        name: "Ali",
        age: 25,
        city: "NYC",
      };
      //convertig to array
      let personArray = Object.values(person);
      //let personArray = Object.entries(person);

      console.log(personArray);

      //let personArray = [...person]; it wont work

      let myArr = ["ali", "hamza", "alice", "abc"];

      //convertig to object
      const myArrObj = { ...myArr };

      console.log(myArrObj);
   