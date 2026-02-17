
const monthlyBudget = 1000;
const food = 180;
const rent = 550;
const hobby = 120;
const totalSpent = food + rent + hobby;
const foodPercent = (food / monthlyBudget) * 100;
const rentPercent = (rent / monthlyBudget) * 100;
const hobbyPercent = (hobby / monthlyBudget) * 100;
console.log(`Monthly Budget: $${monthlyBudget}`);
console.log(`------------------------------`);
console.log(`Food: $${food} (${foodPercent.toFixed(1)}%)`);
console.log(`Rent: $${rent} (${rentPercent.toFixed(1)}%)`);
console.log(`Hobby: $${hobby} (${hobbyPercent.toFixed(1)}%)`);
console.log(`------------------------------`);
console.log(`Total Spent: $${totalSpent}`);
