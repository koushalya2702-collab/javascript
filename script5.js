// Functions

function greet() {
    console.log("Hello");
}

greet(); 

// Function with Parameters


function greet(name) {
    console.log("Hello " + name);
}

greet("Koushalya");
greet("Ram");

// Function with Return 


function add(a, b) {
    return a + b;
}

let result = add(2, 3);
console.log(result);

// Multiple Examples
// Example 1:

function square(num) {
    return num * num;
}

console.log(square(4));

// Example 2:

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(5)); // false

// Example 3:
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(10, 20));

//  Arrow Function 


const add = (a, b) => {
    return a + b;
};

console.log(add(2, 5));