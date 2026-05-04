// for loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2 

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// while loop

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Example 3 (sum of numbers):

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log(sum);

// Example 4 (even numbers):

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Example 5 (count even numbers):

let count = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log(count);