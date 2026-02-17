let age = 15;
let ParentalConsent = true;
let canEnter = (age >= 18) || (age >= 13 && ParentalConsent);

// Output result
if (canEnter) {
    console.log("You are allowed to attend the concert.");
} else {
    console.log("You are NOT allowed to attend the concert.");
}
