function findAvg(gradesList) {
	const average = gradesList.reduce((sum, grade) => sum + grade, 0) / gradesList.length;
	console.log(`Average: ${average}`);
	checkResult(average);
}

function checkResult(average) {
	if (average > 65) {
		console.log("You passed ");
	} else if (average < 65) {
		console.log("You failed and must repeat the course.");
	}
}

findAvg([80, 90, 70]);