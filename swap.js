let a = 10;
let b = 20;

console.log("Before Swap:");
console.log("a =", a);
console.log("b =", b);

// Swapping using addition & subtraction
a = a + b;
b = a - b;
a = a - b;

console.log("After Swap:");
console.log("a =", a);
console.log("b =", b);
