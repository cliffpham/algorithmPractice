
///////////////////My Attempt///////////////////////////

function allAnagrams(arr) {
    const sorted = arr.map(str => str.split('').sort().join(''));

   
// !! expr returns a Boolean value (true or false) depending on the truthiness of the expression. 
// It makes more sense when used on non-boolean types. 
// Consider these examples, especially the 3rd example and onward:

//           !!false === false
//            !!true === true

//               !!0 === false
// !!parseInt("foo") === false // NaN is falsy
//               !!1 === true
//              !!-1 === true  // -1 is truthy

//              !!"" === false // empty string is falsy
//           !!"foo" === true  // non-empty string is truthy
//         !!"false" === true  // ...even if it contains a falsy value

//      !!window.foo === false // undefined is falsy
//            !!null === false // null is falsy

//              !!{} === true  // an (empty) object is truthy
//              !![] === true  // an (empty) array is truthy; PHP programmers beware!

    return !!sorted.reduce((a,b) => (a === b) ? a: NaN);

// if a === b it will return the string hence true
// otherwise if a !== b it will return NaN (a falsy statement) hence false
}

// console.log(allAnagrams(['abcd', 'dabc', 'cabd']));
// console.log(allAnagrams(['abcd', 'daXc', 'cabd']));
// console.log(allAnagrams(['abcd', 'daXc', 'cabd']));

///////////////////Brute Force Method///////////////////////////

function allAnagramsBrute(arr) {
    const sorted = arr.map(str => str.split('').sort().join('')); // a * (s+s * log(s) + s)
    // -> a * (s * log(s))
    // -> a * s * log(s)
    for(let i =0; i < sorted.length; i++) {
        if(sorted[i] !== sorted[0]){
            return false;
        }
    }
    return true;
}

//Time: a * s * log(s)
//Space:0(a*s)

// console.log(allAnagramsBrute(['abcd', 'dabc', 'cabd']));
// console.log(allAnagramsBrute(['abcd', 'daXc', 'cabd']));
// console.log(allAnagramsBrute(['abcd', 'daXc', 'cabd']));

///////////////////Clean Method///////////////////////////

function getCharCount(str) { 
    const hist = {};
    for (char of str) {
        if(hist[char] === undefined) {
            hist[char] = 1 
        } else {
            hist[char]++
        }
    }
    return hist
}

function allAnagramsClean(arr) {
    for(let i = 1; i < arr.length; i++) { 
        if(arr[i].length !== arr[0].length) {
            return false;
        }
    }

    const compareHist = getCharCount(arr[0]); 

    for (let i = 1; i < arr.length; i++) { 
        let thisString = arr[i];
        const thisHist = getCharCount(thisString); 
        
        for(char in thisHist) {
            if(thisHist[char] !== compareHist[char]) {
                return false
            }
        }
    }
    return true;
}

//Time: O(a * s)
//Space:O(s)

// console.log(allAnagramsClean(['abcd', 'dabc', 'cabd']));
// console.log(allAnagramsClean(['abcd', 'daXc', 'cabd']));
// console.log(allAnagramsClean(['abcd', 'daXc', 'cabd']));
// console.log(allAnagramsClean(['abcde', 'dabc', 'cabd']));

///////////////////My Attempt///////////////////////////
var matrix =  [[1,2],
               [3,4]]

var matrixTwo = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]


function addDiagonals (matrix) {
    let length = matrix.length
    let sumOne = 0;
    let sumTwo = 0;

    for (let i = 0; i < length; i++) {
        sumOne += matrix[i][i];
        sumTwo += matrix[length - 1 - i][i];
    }
    return Math.abs(sumOne - sumTwo);
}

// console.log(addDiagonals(matrixTwo));

function rotate90(mat) {
    const newMatrix = [];


 /*
     0 1
 0 [[1,2],
 1 [3,4]]

  ->
 [[3,1],
  [4,2]]

  0, 0 -> 0, 1
  0, 1 -> 1, 1
  1 ,0 -> 0, 0
  1, 1 -> 1, 0


 */

    for(let i = 0; i < mat.length; i++) {
        newMatrix.push([]);
    }

    /* i loop runs twice inside j which runs twice for a total of four
     i [0] j[0] -> i[0] j[1]
     i [1] j[0] -> i[1] j[1]
    */

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat.length; j++) {
            newMatrix[j][mat.length - 1 - i] = mat[i][j];
        }

    }
    
    return newMatrix
}

// console.log(rotate90(matrix));
// console.log(rotate90(matrixTwo));
// console.log(rotate180(matrix));
// console.log(rotate270(matrixTwo));

function rotate180(mat) {
    return rotate90(rotate90(mat));
}

function rotate270(mat) {
    return rotate180(rotate90(mat));
}

///////////////////My Attempt///////////////////////////

function search(numbers,target) {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === target) {
            return i
        }
    }
    return -1
}

// console.log(search([1,3,6,13,17],13)); //return index 3
// console.log(search([1,3,6,13,17],12)); // return -1

//O(n)
//O(1)

///////////////////Clean Version///////////////////////////

function searchClean(numbers,target) {
    let startIndex = 0;
    let endIndex = numbers.length - 1;

    if(target < numbers[startIndex] || target > numbers[endIndex]) {
        return -1;
    }

    while(1) {
        if(target === numbers[startIndex]) {
            return startIndex;
        }

        if(target === numbers[endIndex]) {
            return endIndex;
        }

        // if there are two numbers remaining but neither equal the target number
        if(endIndex - startIndex <= 1) {
            return -1
        }

        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleNumber = numbers[middleIndex];

        if (target > middleNumber) {
            startIndex = middleIndex + 1;
        } else if (target < middleNumber) {
            endIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }
}

/////////////


