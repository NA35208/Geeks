function biggestNumberInArray(arrayNumber) {
	const numbers = arrayNumber.filter(
		(value) => typeof value === "number" && !Number.isNaN(value)
	);
	return numbers.length === 0 ? 0 : Math.max(...numbers);
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));
console.log(biggestNumberInArray(["a", 3, 4, 2]));
console.log(biggestNumberInArray([]));
