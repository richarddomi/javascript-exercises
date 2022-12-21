clearImmediate;

const reverseString = function (phrase = '') {
    let length = phrase.length;
    let i = length-1; // shift down to initiate count from 0
    let new_word = '';

    // i +1 is required because it will not account for the first letter which sits at 0
    while (i+1) {
        new_word = new_word + phrase[i]; 
        i--;
    }
    return new_word;
};

// console.log(reverseString("abcdefghijklmno"));

// Do not edit below this line
module.exports = reverseString;
