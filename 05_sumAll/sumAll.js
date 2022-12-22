let upper = 0; lower = 0;

const sumAll = function (x = 0, y = 0) {
    let j = 0;

    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";

    if (x > y) {
        lower = y;
        upper = x;
    }
    else if (x < y) {
        lower = x;
        upper = y;
    }
    else if (x == y) {
        return 0;
    };

    if (lower >= 0 && upper >= 0) {
        let i = lower;
        for (i; i <= upper; i++) {
            j += i;
        };
        return j;
    }
    else {
        return 'ERROR';
    };
};
// console.log(sumAll(-1, 4));
// Do not edit below this line
module.exports = sumAll;
