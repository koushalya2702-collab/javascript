// Decision Making
let age = 20;

if (age > 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}


// Example 1:
let num = 10;

if (num > 5) {
    console.log("Big");
} else {
    console.log("Small");
}

// Example 2:
let num = 4;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// if - else if - else

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// Nested if 
let age = 20;
let hasID = true;

if (age > 18) {
    if (hasID) {
        console.log("Allowed");
    } else {
        console.log("No ID");
    }
}

// Example 5:
let num = 0;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Example 6:
let temp = 35;

if (temp > 30) {
    console.log("Hot");
} else {
    console.log("Cool");
}

// Example 7:
let password = "1234";

if (password === "1234") {
    console.log("Login success");
} else {
    console.log("Wrong password");
}