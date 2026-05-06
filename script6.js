// Arrays

let arr = [1, 2, 3, 4, 5];

console.log(arr);

// Access Elements (INDEX)

let arr = [10, 20, 30];

console.log(arr[0]); // 10
console.log(arr[1]); // 20

// Change Value

let arr = [1, 2, 3];

arr[1] = 10;

console.log(arr);

//  Length of Array

let arr = [1, 2, 3, 4];

console.log(arr.length);

// Loop Through Array 

let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Sum of array

let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

// Find max element

let arr = [5, 2, 9, 1];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);

// Count even numbers

let arr = [1, 2, 3, 4, 6];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        count++;
    }
}

console.log(count);