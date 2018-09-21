//time complexity: 0(n) - linear

// let anagramChecker = (str1, str2) => {
//   a = str1
//     .split("")
//     .sort()
//     .join("");
//   b = str2
//     .split("")
//     .sort()
//     .join("");

//   console.log(a);
//   console.log(b);

//   return a === b;
// };

// let anagramChecker2 = (s, t) => {
//   let hist = {};
//   for(let i = 0; i < s.length; i++) {
//       let char = s[i];
//       if (char in hist) {
//         hist[char]++;
//         console.log(hist)
//       } else {
//         hist[char] = 1;
//         console.log(hist)
//       }
//   }
//   for(let i = 0; i < t.length; i++) {
//     let char = t[i];
//       if (char in hist) {
//         hist[char]--;
//         console.log(hist)
//       } else {
//         return false;
//       }
//   }
//   for (let key in hist) {
//       console.log(hist[key]);
//       if(hist[key]) { //if anything exists in the key
//           return false;
//       }
//   }
//   return true;
// };

// console.log(
//     anagramChecker2('abb', 'aba'));

/////************charAdder****************//////

// let charAdder = (str) => {
//     let strArray = str.split('')

//     for (i = 0; i < strArray.length; i++) {
//     if (strArray[i] === ' ') {
//         strArray[i] = '%20'
//     }
//     }
//     return strArray.join('');
// }

// console.log((charAdder("I like chicken"), charAdder("Hello dearest, I wrote to you")));

///////////////***maxChar***////////////////////////////////

// let maxCharFinder = (str) => {
//   let hist = {};   //histogram of string
//   let max = 0;     // helper
//   let maxChar = ''; //helper
//     for (char of str) {
//       if (hist[char]) {  // if the char already exists increment by 1
//         hist[char]++
//       } else {
//         hist[char] = 1; // if it is appearing for the first time set to 1
//       }
//     }

//     for (char in hist) {
//       if(hist[char] > max) {
//         max = hist[char]
//         maxChar = char
//       }
//     }
//     return maxChar;
// }

// console.log(maxCharFinder('supercalifragiliousexpalidious'));

/////////////////Array Chunk/////////////////

// function chunk(array, size) {

// }

// function reverse(arrayOfChars) {

//     // Reverse the input array of characters in place
//     let leftIndex = 0;
//     let rightIndex = arrayOfChars.length - 1;
    
//     while (leftIndex < rightIndex) {
//     console.log('intial rightIndex: ' + rightIndex);
//       const temp = arrayOfChars[leftIndex];
//       arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
//       arrayOfChars[rightIndex] = temp;

//       console.log(arrayOfChars[leftIndex])
//       console.log(arrayOfChars[rightIndex])
      
//       leftIndex++;
//       rightIndex--;

//       console.log(leftIndex);
//       console.log(rightIndex);
//     }
//     return arrayOfChars
//   }
  
//   let array = ['a','b','c','d','e'];
  
//   console.log(reverse(array));

