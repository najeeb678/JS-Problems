
      // 12.Write a function that finds the longest word in a String and returns
      // the length of the longest word in the provided sentence. The response
      // should be a number.
   
      let sentence = "The quick brown fox jumped over the lazy dog";
      const wordLengthFinder = (sentence) => {
        let words = sentence.split(" ");

        let longestWord = "";
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > longestWord.length) {
            longestWord = words[i];
          }
        }
        return { word: longestWord, length: longestWord.length };
      };
      console.log(wordLengthFinder(sentence));
   