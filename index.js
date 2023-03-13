
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
console.log(squaredNumbers);


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
console.log(sum); 



let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

// Метод filter - не мутабельный, не меняет оригинальный массив
let activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// Метод sort - мутирует оригинальный массив 
let balance = users.sort((a, b) => a.balance.localeCompare(b.balance));
console.log(balance);

// Метод map - не мутабельный, но в принципе можно изменять изначальный массив через функцию callback 
let males = users.filter(user => user.gender === "male").map(user => user.name);
console.log(males);

// Метод reduce - не мутабельный 
const totalBalance = users.reduce((acc, user) => {
    const balance = parseFloat(user.balance.replace(/[$,]/g, ''));
    return acc + balance;
}, 0);
  
console.log(totalBalance);
