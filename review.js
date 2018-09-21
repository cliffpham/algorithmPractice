function allAnagrams (arr) {

    for(let i = 1; i < arr.length; i++) {
        if(arr[0].length !== arr[i].length) {
            return false;
        }
    }

    const firstHist = countChars(arr[0]);

    for(let i = 1; i < arr.length; i++) {
        let checkHist = countChars(arr[i]);
        for (chars in checkHist) {
            if(checkHist[chars] !== firstHist[chars]) {
                return false;
            }
        }
    }
    return true;
}

function countChars(str) {
    const hist = {};

    for (char of str) {
        if(hist[char] === undefined) {
            hist[char] = 1
        } else {
            hist[char]++;
        }
    }
    return hist
}

// console.log(allAnagrams(['abcd', 'dabc', 'cabd']));
// console.log(allAnagrams(['abcd', 'daXc', 'cabd']));
// console.log(allAnagrams(['abcd', 'dac', 'cabd']));

// function flattenArray(arr) {
//     const newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if(Array.isArray(item)) {
//             const flattenItem = flattenArray(item)

//             for(let j = 0; j < flattenItem.length; j++) {
//                 newArray.push(flattenItem[j]);
//             }
//         } else {
//             newArray.push(item);
//         }       
//     }
//     return newArray;
// }

// console.log(flattenArray([1,2,[[3]],4,[[[[5]]]]]));

// function search(numbers, target) {
//     let startIndex = 0;
//     let endIndex = numbers.length - 1;

//     if(target < numbers[startIndex] || target > numbers[endIndex]) {
//         return -1;
//     }

//     while(1) {
//         if(target === numbers[startIndex]) {
//             return startIndex;
//         }

//         if(target === numbers[endIndex]) {
//             return endIndex;
//         }

//         if(endIndex - startIndex <= 1) {
//             return -1
//         }

//         const middleIndex = Math.floor((startIndex + endIndex) / 2);
//         const middleNumber = numbers[middleIndex];

//         if (target > middleNumber) {
//             startIndex = middleIndex + 1;
//         } else if (target < middleNumber) {
//             endIndex = middleIndex - 1;
//         } else {
//             return middleIndex;
//         }
//     }
// }

// var alphabet = ("abcdefghijklmnopqrstuvwxyz").split('');

// console.log(search([1,3,6,13,17],13)); //return index 3
// console.log(search([1,3,6,13,17],12)); // return -1
// console.log(search([1,3,6,13,17],12)); // return -1
// console.log(search(alphabet, 'b'));

// function search(list, target) {
//     let startIndex = 0;
//     let endIndex = list.length - 1;

//     if(target < list[startIndex] || target > list[endIndex]) {
//         return -1;
//     }

//     while(1) {
//         if(target === list[startIndex]){
//             return startIndex;
//         }

//         if (target === list[endIndex]) {
//             return endIndex;
//         }

//         if(endIndex - startIndex <= 1) {
//             return -1
//         }

//         const middleIndex = Math.floor((startIndex + endIndex) / 2);
//         const middleItem = list[middleIndex];

//         if(target > middleItem) {
//             startIndex = middleIndex + 1;
//         } else if (target < middleItem) {
//             endIndex = middleIndex - 1
//         } else {
//             return middleIndex
//         }        
//     }
// }


// function nbYear(p0, percent, aug, p) {
//     // your code
//     var percent = (percent / 100)
//     let yearCounter = 0;
//     let i = p0;
//     let newPop = p0;
    
//     while(p > i) {
//         i = newPop + (newPop * percent) + aug;
//         newPop = i;
//         yearCounter++;
//     }

//     return yearCounter;
// }

// console.log(nbYear(1000, 2, 50, 1200));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1500000, 2.5, 10000, 20000000));

// function XO(str) {
//     //code here
//     const string = str.toLowerCase().split('');
//     let x = 0;
//     let o = 0;

//     for (let i = 0; i < string.length; i++) {
//         if(string[i] === 'x') {
//             x++;
//         } else if (string[i] === 'o') {
//             o++;
//         }
//     }

//     if(x === o) {
//         return true;
//     }

//     return false;
// }

// console.log(XO('xxoo'));
// console.log(XO('xXoo'));
// console.log(XO('xxoo'));
// console.log(XO('Oo'));
// console.log(XO('ooom'));
// console.log(XO('ccYY'));

// function getMiddle(s)
// {
// let array = s.split('');
// let startIndex = 0;
// let endIndex = array.length - 1;

//   if(s.length % 2) {
//       let middleIndex = startIndex + endIndex / 2;
//       return array[middleIndex];
//   }
//     let middleIndex = s.length / 2;
//     return array[middleIndex - 1] + array[middleIndex];
// }
// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));
// console.log(getMiddle("clifford"));
// console.log(getMiddle('pozzolanas'));
// console.log(getMiddle('maximization'));

// function getMiddle(string) {
//     var middleIndex = string.length / 2;
//     if (string.length % 2 == 0) {
//       return string.slice(middleIndex - 1, middleIndex + 1);
//     } else {
//       return string.charAt(middleIndex);
//     }
//   }

///////my solution///////

function highAndLow(numbers){
    // ...
    let numArray = numbers.split(' ').map((item) => parseInt(item,10));
    numArray.sort(((a,b)=> b - a));
 
    return ('' + numArray[0]) + ' ' + ('' + numArray[numArray.length - 1]);

  }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));  
// "542 -214"

/////highest ranked solution///////////
// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

function accum(s) {
    // your code
    let array = s.split('')

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i].toUpperCase()){
            array[i] = array[i].toUpperCase() + array[i].repeat(i);
        } else {
            let caseDown = array[i].toLowerCase();
            array[i] = array[i] + caseDown.repeat(i);
        }
        
    }
    return array.join('-');
}

// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty"));  // accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));  // accum("cwAt");    // "C-Ww-Aaa-Tttt"

/// most popular method ///

// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }

function sortArray(array) {
    // Return a sorted array.
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

// function sortArray(array) {
//     var odds = [];
//     //loop, if it's odd, push to odds array
//     for (var i = 0; i < array.length; ++i) {
//       if (array[i]%2 !== 0) {
//         odds.push(array[i]);
//       }
//     }
//     //sort odds from smallest to largest
//     odds.sort(function(a,b){
//       return a-b;
//     });
    
//     //loop through array, replace any odd values with sorted odd values
//     for (var j = 0; j < array.length; ++j) {
//       if (array[j]%2 !== 0) {
//         array[j] = odds.shift();
//       }
//     }
    
//    return array;
//   }

// function alphabetPosition(text) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
//     return text.toLowerCase()
//     .split('')
//     .map((x) => alphabet.indexOf(x) + 1 + '')
//     .filter(x => x !== '0')
//     .join(' ');
//     ;
//   }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function persistence(num) {   

    if(num <= 9) {
        return 0;
    }
    let counter = 0;

    let result = (''+num)
    .split('')
    .map(Number)
    .reduce((a,b) => a*b);

    counter++;

    while(result >= 9) {
        result = (''+result)
        .split('')
        .map(Number)
        .reduce((a,b) => a*b);
        counter++;
    }

    return counter;


}

//// best practice///
// function persistence(num) {
//     var times = 0;
    
//     num = num.toString();
    
//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
//  }

// 

// function reversestring (str) {
//     let strToArr = str.split('')

//     let leftIndex = 0;
//     console.log(strToArr.length);
//     let rightIndex = strToArr.length - 1;

//     while(leftIndex < rightIndex) {
//         const temp = strToArr[leftIndex];
//         strToArr[leftIndex] = strToArr[rightIndex];
//         strToArr[rightIndex] = temp;
//         leftIndex++;
//         rightIndex--;
//     }
//     return strToArr.join('');
// }

// console.log(reversestring('hello'));

const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];


function reverseWords (message) {
    reverseCharacters(message, 0, message.length - 1)

    let currentWord = 0;

    for(let i = 0; i <= message.length; i++) {
        if(i === message.length || message[i] === ' ') {
            reverseCharacters(message, currentWord, i - 1)
            currentWord = i + 1;
        }
    }

    return message.join('')

}

function reverseCharacters (message, leftIndex, rightIndex) {
    while (leftIndex < rightIndex) {
        const tempIndex = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = tempIndex;
        leftIndex++;
        rightIndex--;
    }
    return message
}

console.log(reverseWords(message));

// console.log(reverseCharacters(message, 0, message.length - 1));




// var myArray     = [3, 4, 6, 10, 11, 15];
// var alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));

// function mergeArrays(arr1, arr2) {
//     // create a new array
//     let mergedArray = arr1.concat(arr2);

//     //push array1 and 2 into newArray
    
//     //sort new array
//     return mergedArray.sort((a,b)=> a - b);
// }

// function findRepeat(numbers) {
//     const numbersSeen = new Set();
//     for(let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         if(numbersSeen.has(number)) {
//             return number;
//         } else {
//             numbersSeen.add(number);
//             console.log(numbersSeen);
//         }
//     }
//     throw new Error('no duplicate!');
// }

// console.log(findRepeat([1,2,3,4,2]))


// var a = [5,6,7];
// var b = [3,6,10];

// function compareTriplets(a, b) {
//     let counterA = 0;
//     let counterB = 0;
//     let counterC = 0;

//     if(Math.sign(a[0] - b[0]) === 0) counterC++;
//     else if(Math.sign(a[0] - b[0]) === 1) counterA++;
//     else counterB++;

//     if(Math.sign(a[1] - b[1]) === 0) counterC++;
//     else if(Math.sign(a[1] - b[1]) === 1) counterA++;
//     else counterB++;

//     if(Math.sign(a[2] - b[2]) === 0) counterC++;
//     else if(Math.sign(a[2] - b[2]) === 1) counterA++;
//     else counterB++;
    
//     return [counterA, counterB]
   
// }

// console.log(compareTriplets(a,b));

function sockMerchant (n, ar) {
    const hist = {};
    let totalAmount = 0;

    for (let item of ar) {
        
        if(hist[item] === undefined) {
            hist[item] = 1;
        } else if (hist[item] === 1 ) {
            totalAmount++;
            delete hist[item];
        }
    } 
    
    return totalAmount;
}

// console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3 ]));
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

let array = [1, 2, 3, 4, 5];
let steps = 4;

// function rotLeft(a, k) {
//   if(array.length < 2) {
//     return array.slice(0); // always return a copy
//   }
//   // check if there's any need to rotate
//   if(steps === 0) {
//     return array.slice(0); // always return a copy
//   }

//   // slice and concat
//   if(steps < 0) {
//     return array.slice(steps).concat(array.slice(0, array.length+steps));
//   } else {
//     return array.slice(steps).concat(array.slice(0, steps));
//   }

//   // ONELINER: console.log(a.concat(a.splice(0,k)).join(' '));
// }

// console.log(rotLeft(array, steps));