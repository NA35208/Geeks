const returnNumbers = require('./returnNumbers');

const testStr = 'k5k3q2g5z6x9bn';
const result = returnNumbers(testStr);

console.log(`Input: "${testStr}"`);
console.log(`Extracted numbers: ${result}`);
console.log(`Type: ${typeof result}`);
