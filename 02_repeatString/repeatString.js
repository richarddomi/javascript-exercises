const repeatString = function (word = '', num = 0) {
    let i = 1;

    if(word == ''){
        return '';
    }
    if (num == 0) {
        return '';
    } 
    else if (num > 0) {
        word = 'hey'
        for (num; i < num; i++) {
            word = word +'hey'
        };
        return word
    } 
    else {
        return 'ERROR';
    };
};

// console.log(repeatString('hey',10));

// Do not edit below this line
module.exports = repeatString;
