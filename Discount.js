const originalTotal = 850;
const randomDiscountPercent = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
const amountSaved = originalTotal * (randomDiscountPercent / 100);
const finalExpense = originalTotal - amountSaved;
console.log(`Original Total: $${originalTotal}`);
console.log(`Random Discount: ${randomDiscountPercent}%`);
console.log(`Amount Saved: -$${amountSaved.toFixed(2)}`);
console.log(`Final Adjusted Expense: $${finalExpense.toFixed(2)}`);
