// Array Methods (map, filter, forEach)

// forEach() (just loop)

let arr = [1, 2, 3];

arr.forEach(function(num) {
    console.log(num);
});

// Map()

let arr = [1, 2, 3];

let result = arr.map(num => num * 2);

console.log(result);

// Example 2:

let arr = [5, 10, 15];

let result = arr.map(num => num + 1);

console.log(result);

// filter()
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(num => num % 2 === 0);

console.log(result);

// Example 2:
let arr = [10, 25, 30];

let result = arr.filter(num => num > 20);

console.log(result);