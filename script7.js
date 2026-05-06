// Strings

// Creating Strings

let name = "Koushalya";
let city = 'Mysore';

console.log(name);
console.log(city);

// Access Characters 


let str = "hello";

console.log(str[0]); // h
console.log(str[1]); // e

//  Length of String

let str = "hello";

console.log(str.length); // 5

// Loop Through String 

let str = "hi";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// toUpperCase()

let str = "hello";

console.log(str.toUpperCase()); // HELLO

// toLowerCase()
let str = "HELLO";

console.log(str.toLowerCase()); // hello

// slice() 
let str = "hello";

console.log(str.slice(1, 4)); // ell

// replace()
let str = "hello";

console.log(str.replace("h", "y")); // yello