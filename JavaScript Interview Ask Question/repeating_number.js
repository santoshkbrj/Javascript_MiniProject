// Find the repeated number from array.

const nums = [1, 2, 1, 3, 2, 5, 6, 8, 3, 5, 6];

function repeat(arr) {
    const obj = {};

    arr.forEach(item => {
        obj[item] ? obj[item] += 1 : obj[item] = 1;
    })
    return obj;

}
const result = repeat(nums)
console.log(result);


// Exclude not repeating number from array

function findRepeatingNumbers(arr) {
    const counts = {};
    const repeatedNumbers = {};

    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    //excluding not repeating number.
    for (const num in counts) {
        if (counts[num] > 1) {
            repeatedNumbers[num] = counts[num];
        }
    }

    return repeatedNumbers;

    //return counts;
}

const myArray = [0, -1, 0, -1, 1, 2, 3, 2, 4, 5, 4, 5, 7];
const repeated = findRepeatingNumbers(myArray);
console.log(repeated); // Output: {2: 2, 4: 2, 5: 2}


//Find the repeated letter from string.
const para = "hare rama here krishna krishna krishna hare hare";

function repeat(str) {
    let newStr = str.split('');
    const obj = {};

    newStr.forEach(el => {
        obj[el] ? obj[el] += 1 : obj[el] = 1;
    })
    return obj;

}
const repatedLetter = repeat(para)
console.log(repatedLetter);