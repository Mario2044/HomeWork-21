function mapping(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = mapping(numbers, function(number) {
    return number * number;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]


function myReduce(array, callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue;
    for (var i = 0; i < array.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, array[i], i, array);
        } else {
            accumulator = array[i];
        }
    }
    return accumulator;
}

var numbers = [1, 2, 3, 4, 5];
var sum = myReduce(numbers, function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15