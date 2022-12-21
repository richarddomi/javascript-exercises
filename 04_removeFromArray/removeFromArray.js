const removeFromArray = function (a = [], ...args) {
    args_length = args.length;
    let i = 0;
    // let new_array = [];
    let item_rm = 0;

    for (i; i < args_length; i++) {
        if (a.includes(args[i])) {
            item_rm = a.indexOf(args[i]);
            a.splice(item_rm, 1);
        };
    };
    return a;
};

// console.log(removeFromArray([1, 2, 3], 12, 3, 4, 3));

// Do not edit below this line
module.exports = removeFromArray;
