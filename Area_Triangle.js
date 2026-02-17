// Heron's Formula - Calculate Area of Triangle

let a = 5;
let b = 6;
let c = 7;

// Calculate semi-perimeter
let s = (a + b + c) / 2;

// Calculate area using Heron's formula
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));


let finalArea = Math.floor(area);


console.log("Sides:", a + ",", b + ",", c);
console.log("Semi-perimeter:", s);
console.log("Raw Area:", area);
console.log("Final (floored) Area:", finalArea);
 