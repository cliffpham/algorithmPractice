function chunkArray (arr, target) {
    const newArray = [];
    let startPoint = 0;

    while (startPoint <= arr.length) {
        newArray.push(arr.slice(startPoint, startPoint + target));
        startPoint += target;
    }
    return newArray;
}


// console.log(chunkArray(['a',2,4,5,6], 2));

function anagramChecker(str1, str2) {
    str1 = str1.replace(/[^\w\s]|_/g,'').replace(/\s+/g,' ').toLowerCase();
    str2 = str2.replace(/[^\w\s]|_/g,'').replace(/\s+/g,' ').toLowerCase();
    const hist = {};


    for (let char of str1) {
        if (hist[char] === undefined) {
            hist[char] = 1;
        } else {
            hist[char]++;
        }
    }

    for (let char of str2) {
        if(hist[char === undefined]) {
            return false;
        } else {
            hist[char]--;

            if(hist[char] === 0) {
                delete hist[char]
            }
        }
    }
    
    return Object.keys(hist).length === 0
}

// console.log(anagramChecker('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagramChecker('Hi there!', 'Bye there!'));

function capitalize(str) {
    let strArray = str.split('');

    
    for (let i = 0; i < strArray.length; i++) {
        if(i === 0) {
            strArray[0] = strArray[0].toUpperCase();
        } else if (strArray[i] === ' ')
            strArray[i + 1] = strArray[i + 1].toUpperCase();
    }

    return strArray.join('')
}

// console.log(capitalize('hello there'));

function stepsRecursive (num, row = 0, stair = '') {
    if(num === row) {
        return;
    }

    if(stair.length === num) {
        console.log(stair);
        return stepsRecursive(num, row + 1);
    }

    if(stair.length <= row) {
        stair += '*'
    } else {
        stair += ' '
    }

    return stepsRecursive(num, row, stair);
}

// stepsRecursive(5);


// pyramid(5);

function pyramid(num) {
    const midPoint = Math.floor((num * 2 - 1)/ 2);

    for(let row = 0; row < num; row++) {
        let level = '';
        for(let column = 0;  column < Math.floor(num * 2 - 1); column++) {
            if(midPoint - row <= column && midPoint + row >= column) {
                level += '*';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

const lamps = [
    [4,3],
    [4,4]
                ]

const queries = [
    [3,4],
    [7,6]
                ]

const result = []

console.log(checkIllumination(lamps, queries));

function checkIllumination (lamps, queries) {
    queries.forEach(([queryX, queryY]) => checkLamps(lamps, queryX, queryY))

    return result
}

function checkLamps (mutatableLamps, queryX, queryY) {

    const checks = [];
    
    let lamps = mutatableLamps.slice();

    for (let i = 0; i < lamps.length; i++) {
        let lampX = lamps[i][0];
        let lampY = lamps[i][1];

        if(checkAdjacent(lampX, lampY, queryX, queryY)) {
            lamps.splice(i, 1);
            checkLamps(lamps, queryX, queryY);
            return;
        }

        else {
            checks.push(checkLightDirections(queryX, queryY, lampX, lampY));
        }   
    }

    if(checks.includes(true)) {
        result.push('LIGHT')
    } else {
        result.push('DARK')
    }
}

function checkHorizontal (queryX, lampX) {
    return queryX === lampX
}

function checkVertical (queryY, lampY) {
    return queryY === lampY
}

function checkDiagonals (queryX, queryY, lampX, lampY) {
    return Math.abs(queryX - lampX) === Math.abs(queryY - lampY)
}

function checkAdjacent (queryX, queryY, lampX, lampY) {
    return Math.abs(queryX - lampX) < 2 && Math.abs(queryY - lampY) < 2
}

function checkLightDirections (queryX, queryY, lampX, lampY) {
    return checkHorizontal(queryX, lampX) || checkVertical(queryY, lampY) || checkDiagonals(queryX, queryY, lampX, lampY)
}

