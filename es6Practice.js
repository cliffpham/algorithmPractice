// const princesses = [
//     { name: "Rapunzel", age: 18 },
//     { name: "Mulan", age: 16 },
//     { name: "Anna", age: 18 },
//     { name: "Moana", age: 16 }
//   ];

//   // log the name of each princess, follow by a colon, followed by their age
// // forEach: executes a provided function once for each array element

// //for each takes an array and a function and throws out what's inside

// princesses.forEach(function(princess) {
//   console.log(`${princess.name}: ${princess.age}`);
// })


// // create an array of just the names from the princesses array
// // map: creates a new array with the results of calling a provided function on every element in the calling array

// const names = princesses.map(princess => princess.name);

// console.log(names);

// // using the `names` array, get only those names that start with an 'M'
// // filter: creates a new array with elements that pass the test of the provided function

// const mNames = names.filter(princess => princess.startsWith('M'));

// console.log(mNames);

// // get a single value from the data: the average age of all of the princesses
// // reduce: applies a function against an "accumulator" and each element in the array (from left to right) to reduce it to a single value.

// const sum = princesses.reduce((reducer, princess) => reducer + princess.age, 0 );
// const average = sum / princesses.length;
// console.log('average age: ', average);

// // BONUS: get the average age of all princesses whose name includes an 'l'

// const includesL = princesses.filter(princess => princess.name.includes('l') );
// const lSum = includesL.reduce((reducer, lPrincess) => reducer + lPrincess.age, 0);
// const lAverage = lSum / includesL.length;

// console.log('average age of l princess: ', lAverage);

// function Counter () {
//     this.num = 0;
// }

// var a = new Counter();

// console.log(a.num);

// write a function that makes the terminal count every second

// class Pokemon {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     showDetails() {
//         console.log(`Name: ${this.name} | Type: ${this.type}`);
//     }

//     getName() {
//         return this.name;
//     }

//     getType() {
//         return this.type;
//     }
// }

// class PokemonPlus extends Pokemon {
//     constructor(name, type, area) {
//     super(name, type);
//         this.area = area
//     }
    
//     showDetailsAndArea() {
//         console.log(`Name: ${this.name} | Type: ${this.type} | Area: ${this.area}`)
//     }
// }

// let pokemon1 = new Pokemon('Pikachu', 'Electric');
// pokemon1.showDetails();

// let pokemon2 = new PokemonPlus('Pidgey', 'Flying', 'Viridian Forest');
// pokemon2.showDetailsAndArea();

// function Counter() {
//     this.num = 0;

//     this.count = setInterval(()=> {
//         this.num++;
//         console.log(this.num);
//     }, 3000)
// }

// let b = new Counter();

//////////////////////////////////////////////////////////////////////////////////////
// console.log(isUnique('abcde'));
// console.log(isUnique('ac#iA'));
// console.log(isUnique('abcda'));

// time complexity: 0(n^2)
// space complexity: 0(1)

// function isUnique(str) {
//     for (var i =0; i < str.length; i++) {
//         if (str.lastIndexOf(str[i]) !== i) {
//             return false;
//         }
//     }
//     return true;
// }

// time complexity: 0(n * log(n))
// space complexity: 0(n)

// function isUnique(str) {
//     const char = str.split('').sort();
//     for (var i=1; i < char.length; i++) {
//         if(char[i] === char[i-1]) {
//             return false
    
//     }
//     return true;
//   }
// }

//time complexity: O(n)
//space complexity O(n)

// function isUnique(str) {
//     const char = new Set();
//     for (var i =0; i <= str.length; i++){
//         const thisChar = str[i];
//         if(char.has(thisChar)) {
//             return false;
//         }
//         char.add(thisChar);
//     }
//     return true;
// }


// function isUnique(str) {
//     return new Set(str).size === str.length;
// }


// console.log(test);

// function flattenArray(nestedArray) {
//     const newArray = [];
//     for (let i = 0; i < nestedArray.length; i ++) {
//         const thisItem = nestedArray[i];
//         if (Array.isArray(thisItem)) {
//             const flatItem = flattenArray(thisItem)
//             for (let j =0; j < flatItem.length; j++) {
//                 newArray.push(flatItem[j]);
//             }
//         } else {
//             newArray.push(thisItem)
//         }
//     }
//     return newArray
// }


// console.log(flattenArray([6, 12, [25], 25, [[[18]]],[[9]]]));

// function isUnique(str) {
//     return new Set(str).size === str.length;
// }

// function isUnique(str) {
//     const char = new Set();
//     for (let i = 0; i < str.length; i++) {
//         const thisChar = str[i];
//         if (char.has(thisChar)) {
//             return false
//         }
//         char.add(thisChar);
//     }
//     return true;
// }

// time complexity: 0(n * log(n))
// space complexity: 0(n)

// function findDup(str) {
//     const newArray = [];
//     const sortedArray = str.split('').sort();

//     for(let i = 0; i < sortedArray.length; i++) {
//         const currentItem = sortedArray[i];
//             if(sortedArray[i] === sortedArray[i-1] ) {
//             newArray.pop(currentItem);
//         } newArray.push(currentItem)
//     }
//     return newArray.join('');
// }

// console.log(findDup('abcde'));
// console.log(findDup('aabbcdee'));
// console.log(findDup('aaabbcdcdcdcd'));

// time complexity: 0(n )
// space complexity: 0(n)

// function findDup(str) {
//     const chars = new Set(str);
//     console.log(chars);
//     return Array.from(chars).join('');
// }

// function highestFrequency(arrayOfStrings) {
//     const hist = {};
//     let highest= 0;
//     let highestString = '';

//     for (char of arrayOfStrings) {
//         if(hist[char]) {
//             hist[char]++;
//         } else {
//             hist[char] = 1;
//         }
//      }

//      for (char in hist) {
//          if(highest < hist[char]) {
//              highest = hist[char]
//              highestString = char
//          }
//      }
//      return highestString
// }

// function highestFrequency(array) {
//     const hist= {};
//     let maxPattern = 0;
//     let pattern = '';

//     for (let i = 0; i < array.length; i++){
//         let item = array[i];
//         if(hist[item] === undefined) {
//             hist[item] = 1;
//         } hist[item]++;
//     }

//     for (item in hist) {
//         if(hist[item] >
//  maxPattern) {
//             maxPattern = hist[item]
//             pattern = item;
//         }
//     }
//     return pattern
// }

// console.log(highestFrequency(['abc','bcd','cbd','cbd','do','doo']));
// console.log(highestFrequency(['abc', 'bcd']));
// console.log(highestFrequency(['abc', 'bcd','cbd','cbd','do','doo', 'bcd','bcd','bcd']));

// function ensure(value) {
//     if (value === null || value === undefined) {
//         throw 'parameter is invalid'
//     }
// }

// console.log(ensure());

//////////////////////////////////////////

// function createCheckDigit(membershipId) {
//     let arrayofNum;
    
//     if (membershipId instanceof String) {
//         arrayofNum = membershipId.split('');
//     } else {
//         arrayofNum = (''+ membershipId).split('');
//     }
//     for (let i = 0; i < arrayofNum.length; i++) {
//         arrayofNum[i] = parseInt(arrayofNum[i], 10);      
//       }

//     let arraySum = arrayofNum.reduce((reducer, sum) => reducer + sum, 0);
    
//     if(arraySum > 9 ) {
//         const newArraySum = createCheckDigit(arraySum);
//         return newArraySum;

//     } 

//     return arraySum;
  
    
//   }
  
//   console.log(createCheckDigit("55555"));
//   console.log(createCheckDigit(55555));
//   console.log(createCheckDigit(79845));
//   console.log(createCheckDigit(79849995));

//////////////////////////////////////////

function formatDate(userDate) {
    let convertDate;

    if (isNaN(Date.parse(userDate)) == true) {
        throw 'this is an invalid date';
    } else {
      convertDate = new Date(userDate); 
    }


    let year = convertDate.getFullYear();
    let month = convertDate.getMonth() + 1;
    let day = convertDate.getDate().toString();

    year = year.toString();
    month = month.toString();
    day = day.toString();

    if (month.length === 1) {
        month = '0' + month;
    } else if (day.length === 1) {
        day = '0' + day;
    }

    convertDate = year + month + day;

    return convertDate;
   
}

// console.log(formatDate("12/31/2014"));
// console.log(formatDate("11/08/2018"));
// console.log(formatDate('chicken'));

// function setup() {
//     let element = document.getElementsByClassName('remove');

//     for (el of element) {
//         el.addEventListener('click', function(){
//             this.parentNode.remove();
//         })
//     }
//   }
  
//   // Example case. 
//   document.body.innerHTML = `
//   <div class="image">
//     <img src="https://goo.gl/kjzfbE" alt="First">
//     <button class="remove">X</button>
//   </div>
//   <div class="image">
//     <img src="https://goo.gl/d2JncW" alt="Second">
//     <button class="remove">X</button>
//   </div>`;
  
// function ensure(value) {
//     if(value !== undefined){
//       return value;
//     }
//     throw new Error();
//   }

//   console.log(ensure());

// function isPrime(num) {
//     if(num >= 2) {
//         for(i = 2;  i < num; i++){
//             if(num%i === 0) {
//                 return false;
//             }  
//         }
//         return true
//     }
//     return false
//   }
  
//   console.log(isPrime(17));
//   console.log(isPrime(8));
//   console.log(isPrime(1));
//   console.log(isPrime(0));

// function stringRotation(str1, str2) {
//    if(str1.length !== str2.length){
//        return false;
//    }

//    for(let i =0; i < str1.length; i++) {
//        const rotation = str1.slice(i, str1.length) + str1.slice(0, i);
    
//        if(rotation === str2) {
//            return true;
//        }
//    }
//    return false;
// }

// function stringRotation(str1, str2) {
//     return str1.length === str2.length && (str1 + str1).includes(str2);
// }
 

// console.log(stringRotation('1234', '2341'));
// console.log(stringRotation('rotation', 'tionrota'));
// console.log(stringRotation('rotation', 'rotaiont'));

// function arraySubset (arr1, arr2) {
//     const hist = {};
//     // if (arr1.length < arr2.length) {
//     //     return false;
//     // }

//     for (i of arr1) {
//         let item = i;
//         if(hist[item] === undefined){
//         hist[item] = 1;
//         } else {
//         hist[item]++;
//         }
//     }

//     for (i of arr2) {
//         let item = i;
        
//         if(hist[item] === undefined){
//         return false;
//         } 

//         hist[item]--;

//         if(hist[item] === 0) {
//             delete hist[item];
//         }      
//     }
//     return true
// }

// console.log(arraySubset([1,2,3], [2,3,1]));
// console.log(arraySubset([1,2,1,3], [2,3,1]));
// console.log(arraySubset([1,2,3], [2,3,1,2]));
// console.log(arraySubset([1,2], [1,2,2,3]));
// console.log(arraySubset([1,2,3], [2,3,4]));
// console.log(arraySubset([1,2,3], [2,3,1,4]));

//  function maximumProfit(array){
//      let minPrice = Infinity;
//      let maximumProfit = 0;

//      for(let i = 0; i < array.length; i++){
//         let currentPrice =array[i];
//         minPrice = Math.min(minPrice, currentPrice);
//         maximumProfit = Math.max(maximumProfit, currentPrice - minPrice);
//      }
//      return maximumProfit;
//  }

//  console.log(maximumProfit([10,7,5,8,11,9]));

// function singleMutation(str1, str2){
//     let mutations = 0;

//     for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++){
//         if(str1[i] !== str2[j]){
//             mutations++;

//             if (mutations > 1) {
//                 return false;
//               }
    
//               if (str1.length > str2.length){
//                 j--;
//               } else if (str1.length < str2.length) {
//                 i--;
//               }
//         }    
//     }
//     return true;
// }

// console.log(singleMutation('abcd', 'abc'));
// console.log(singleMutation('abcd', 'abXd'));

// function createCheckDigit(membership) {
//     let toArray = [];
    
//     if (membership instanceof String) {
//        toArray =  membership.split('');
//     } else {
//        toArray =  ('' + membership).split('');
//     }

//     for (let i = 0; i < toArray.length; i++) {
//         toArray[i] = parseInt(toArray[i], 10);

//         if(isNaN(toArray[i])) {
//             return new Error('this is not a proper membership id');
//         }
//     }

//     let arraySum = toArray.reduce((reducer,sum) => reducer + sum, 0);

//     if (arraySum > 9) {
//         const runAgain = createCheckDigit(arraySum);
        
//         return runAgain;
//     }

//     return arraySum;
// }


// console.log(createCheckDigit('55555'));
// console.log(createCheckDigit(55555));
// console.log(createCheckDigit(11111));
// console.log(createCheckDigit('chicken'));

// function fibonacci (n) {
//     const seq = [1,1]

//     if(seq.length > n) {
//         return seq.splice(0, n);
//     }

//     while (seq.length < n) {
//         console.log('sequence length is currently: ' + seq.length)
//         const lastItem = seq[seq.length - 1];
//         console.log(lastItem);
//         const secondLastItem = seq[seq.length - 2];
//         console.log(secondLastItem);

//         seq.push(lastItem + secondLastItem)
//     }

//     return seq
// }


const fibonacci = (function() {
    const seq = [1,1];

    return function(n) {
        if(seq.length > n) {
            return seq.slice(0,n)
        }

        while(seq.length < n) {
            const lastItem = seq[seq.length - 1];
            const secondLastItem = seq[seq.length - 2];
            seq.push(lastItem + secondLastItem);
        }
        return seq;
    }
    
})();  // IIFE - immediately invoked function

// console.log(fibonacci(6));
// console.log(fibonacci(12));
// console.log(fibonacci(8));

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value,
//             next:null
//         }
//         this.length = 1;
//     }
// }

function harmlessRandsomNote(noteText, magazineText) {
    let noteArray = noteText.split('');
    let magazineArray = magazineText.split('');
    const hist = {};

    for (word of noteArray) {
        if(hist[word] === undefined) {
            hist[word] = 1;
        } else {
            hist[word]++;
        }
    }

    for (word of magazineArray) {
        if(hist[word]) {
            hist[word]--;

        if(hist[word] === 0) {
            delete hist[word]
        }
        }
    }

    return Object.keys(hist).length === 0 // remember this line of code


}

const note = "Hi hunny I'm home"
const magazine = "I'm a badger who's home sounds like hunny. Hi"

const magazineTwo = "I just ate a huge burger and feel fat"


// console.log(harmlessRandsomNote(note, magazine));
// console.log(harmlessRandsomNote(note, magazineTwo));


//Today I finally understood the splice tool

function chunkArray (arr, target) {
    const newArray = [];

    let index = 0;

    while(index <= arr.length) {
        newArray.push(arr.slice(index, index + target)); 

        index += target;
    }

    // for(let ogE of arr) {
    //     const lastItem = newArray[newArray.length - 1];

    //     if(!lastItem || lastItem.length === target) {
    //         newArray.push([ogE]);
    //     } else {
    //         lastItem.push(ogE)
    //     }
    // }
    return newArray
}

// console.log(chunkArray(['a',2,4,5,6], 2));


var test = "Hello  !!_#$%"

test = test.replace(/[^\w\s]|_/g,"").replace(/\s+/g,"").toLowerCase();

// console.log(test);

function anagramChecker(str1, str2) {
    const hist = {};

    // simply understanding .replace(/_/g," ") on Hello_There becomes Hello There

    str1 = str1.replace(/[^\w\s]|_/g,"").replace(/\s+/g,"").toLowerCase();
    str2 = str2.replace(/[^\w\s]|_/g,"").replace(/\s+/g,"").toLowerCase();

    // Removes everything except alphanumeric characters and whitespace, then collapses multiple adjacent characters to single spaces.

    // \w is any digit, letter.
    // \s is any whitespace.
    // [^\w\s]|_ is anything that's not a digit, letter, whitespace, or underscore.
    // The g means Global, and causes the replace call to replace all matches, not just the first one.
    // + a plus sign matches one or more of the preceding character

    for(let char of str1) {
        if(hist[char] === undefined) {
            hist[char] = 1 
        } else {
            hist[char]++;
        }
    }

    for(let char of str2) {
        if(hist[char] === undefined) {
            return false;
        } else {
            hist[char]--;
        }

        if(hist[char] === 0) {
            delete hist[char]
        }
    }
    return Object.keys(hist).length === 0; //returns the length of []

}

// console.log(anagramChecker('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagramChecker('Hi there!', 'Bye there!'));

function capitalize (str) {
    str = str.split('');
    
    for(let i = 0; i < str.length; i++) {
        if(i === 0) {
            str[0] = str[0].toUpperCase();
        } else if (str[i] === ' ') {
            str[i+1] = str[i + 1].toUpperCase();
    }
  }
  
  return str.join('');
}

// console.log(capitalize('hello there'));

///Steps my solution ///

// function steps (num) {
//     const step = '#';
//     let index = 0;

//     while (index <= num) {

//         if(index >= 1){
//         console.log("'" + step.repeat(index) + "'");
//         }
//         index++;
//     }
// }

// steps(5);

/////steps correct solution///

function steps(number) {
    
    for (let row = 0; row < number; row++) {
        let level = '';
        
        for (let column = 0; column < number; column++) {
            if(column <= row) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

// steps(5);


////steps recursive solution ///

function stepsRecursive(n, row = 0, stair = '') {
    if(n === row) {
        return;
    }

    if(stair.length === n) {
        console.log(stair);
        return stepsRecursive(n, row + 1);
    }

    if(stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    stepsRecursive(n, row, stair);
}

// stepsRecursive(5);

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1)/ 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

pyramid(4);

function vowelChecker(str) {
    const vowels = ['a', 'i', 'e', 'o', 'u'];
    let counter = 0;


    for (let char of str) {
        if(vowels.includes(char)) {
            counter++
        }
     }
     return counter
}

// console.log(vowelChecker('hello'));

