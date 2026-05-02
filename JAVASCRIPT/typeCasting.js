// question: swap two numbers via 3 methods

// 1. via temporary variable
let a = 5;
let b = 10;

let temp = a; // temp = 5
a = b; // a = 10
b = temp; // b = 5
console.log("After swapping: a =", a, "b =", b); 


// 2. via destructuring assignment
let x = 5;
let y = 10;

[x, y] = [y, x]; // Destructuring assignment to swap values
console.log("After swapping: x =", x, "y =", y);

// 3. via arithmetic operations
let m = 5;
let n = 10;
m = m + n; // m = 15
n = m - n; // n = 5
m = m - n; // m = 10
console.log("After swapping: m =", m, "n =", n);

